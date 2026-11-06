/* eslint-disable no-console */
/**
 * Copies the v3 media (Azure blob container, public) into the MinIO bucket,
 * under the keys Strapi's aws-s3 provider uses: upload/<hash><ext>, for the
 * original and every generated format. Idempotent: existing keys are skipped.
 *
 *   V3_DATABASE_URL=postgres://... \
 *   MINIO_PRIVATE_ENDPOINT=https://s3.bratislava.sk MINIO_BUCKET=nadaciamesta \
 *   MINIO_ACCESS_KEY=... MINIO_SECRET_KEY=... \
 *   node scripts/migrate-v3/media.js
 */
const { Client } = require('pg')
const { S3Client, HeadObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3')

const CONCURRENCY = 8

const required = (name) => {
  if (!process.env[name]) throw new Error(`${name} is required`)
  return process.env[name]
}

const main = async () => {
  const bucket = required('MINIO_BUCKET')
  const s3 = new S3Client({
    endpoint: required('MINIO_PRIVATE_ENDPOINT'),
    region: 'bratislava',
    forcePathStyle: true,
    credentials: {
      accessKeyId: required('MINIO_ACCESS_KEY'),
      secretAccessKey: required('MINIO_SECRET_KEY'),
    },
  })

  const v3 = new Client({ connectionString: required('V3_DATABASE_URL') })
  await v3.connect()
  const { rows } = await v3.query(
    'select hash, ext, mime, url, formats from upload_file order by id',
  )
  await v3.end()

  const objects = rows.flatMap((file) => [
    { key: `upload/${file.hash}${file.ext}`, url: file.url, mime: file.mime },
    ...Object.values(file.formats ?? {}).map((format) => ({
      key: `upload/${format.hash}${format.ext}`,
      url: format.url,
      mime: format.mime,
    })),
  ])

  const stats = { copied: 0, skipped: 0, failed: [] }
  const copy = async ({ key, url, mime }) => {
    try {
      await s3.send(new HeadObjectCommand({ Bucket: bucket, Key: key }))
      stats.skipped += 1
      return
    } catch (error) {
      if (error.$metadata?.httpStatusCode !== 404) throw error
    }
    const response = await fetch(url)
    if (!response.ok) {
      stats.failed.push(`${key} <- ${url}: HTTP ${response.status}`)
      return
    }
    const body = Buffer.from(await response.arrayBuffer())
    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: mime,
        CacheControl: 'public, max-age=31536000, immutable',
      }),
    )
    stats.copied += 1
  }

  for (let i = 0; i < objects.length; i += CONCURRENCY) {
    await Promise.all(objects.slice(i, i + CONCURRENCY).map(copy))
    if ((i / CONCURRENCY) % 25 === 0) console.log(`[media] ${i}/${objects.length}`)
  }

  console.log(
    `[media] ${objects.length} objects: ${stats.copied} copied, ${stats.skipped} already there`,
  )
  if (stats.failed.length) {
    console.error(`[media] ${stats.failed.length} failed:\n${stats.failed.join('\n')}`)
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
