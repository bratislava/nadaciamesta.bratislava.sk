# Strapi v3 → v5 import

The site ran on Strapi 3.6 (database `city-foundation` in the shared `strapi-cnpg` cluster,
media in the Azure blob container `nadaciadev/strapi/assets`). These scripts move it to
Strapi 5 without touching the source:

- `media.js` copies every v3 file (original and all formats) into the MinIO bucket under the
  keys the aws-s3 provider uses (`upload/<hash><ext>`). Idempotent, safe to re-run.
- `index.js` imports the v3 database into an **empty** Strapi 5 database through Strapi's own
  Document Service, then patches what the Document Service doesn't let you set:
  - `documentId` = `v3_<v3 id>`, so `/projects/585` keeps working (`next/utils/documentId.ts`
    maps between the two). Not the bare number: Strapi reads an all-digit relation value as a
    row id;
  - original `createdAt` / `updatedAt` / `publishedAt` and created/updated by;
  - blog slugs as they were.

  It also imports admin users with their v3 password hashes and roles, keeps drafts as drafts,
  drops relations to rows v3 deleted without cascading, and carries over the content-manager
  list/edit layouts and labels. Entries are created in v3's physical row order, which is the
  order v3 returned unsorted lists in; the site sorts by id to match.

## Run

Against a copy of the v3 database (a local restore of a dump is easiest):

```bash
# v3 dump restored locally
createdb v3 && psql -d v3 -f city-foundation-prod.sql

# media (MinIO keys: `terragrunt output -json app_secret_data` in the infra repo's
# clusters/production/applications/nadaciamesta.bratislava.sk/strapi/buckets)
V3_DATABASE_URL=postgres://…/v3 \
MINIO_PRIVATE_ENDPOINT=https://s3.bratislava.sk MINIO_BUCKET=nadaciamesta \
MINIO_ACCESS_KEY=… MINIO_SECRET_KEY=… \
npm run migrate:media

# data, into an empty Strapi 5 database (DATABASE_* as in .env)
npm run build
V3_DATABASE_URL=postgres://…/v3 \
MEDIA_PUBLIC_URL=https://nadaciamesta.s3.bratislava.sk \
NODE_ENV=development npm run migrate:v3
```

Without `MEDIA_PUBLIC_URL` the files keep their Azure URLs. `@aws-sdk/client-s3` comes with
`@strapi/provider-upload-aws-s3`.

## Into a cluster

Either restore the local result into that cluster's `nadaciamesta` database
(`pg_dump --no-owner --no-acl`, then `psql` with the `strapi-cnpg-nadaciamesta-credentials`
secret) and restart Strapi, or push it over HTTPS with Strapi's data transfer (how development
was filled):

1. On a fresh deployment, create the first admin at `/admin` and a transfer token with `push`
   permission (Settings → Transfer tokens).
2. From this directory, with the local database holding the import:

   ```bash
   NODE_ENV=development npx strapi transfer \
     --to https://nadaciamesta-strapi.<cluster>.bratislava.sk/admin --to-token … \
     --exclude files --force
   ```

**Always pass `--exclude files`.** The media bucket is shared by all clusters and the import's
file records already point into it. Without the flag the destination first deletes every file it
has through the S3 provider, i.e. from the shared bucket, and then the transfer fails reading
them back. `npm run migrate:media` restores anything deleted this way.

The transfer moves content, media records, relations and content-manager layouts with their
documentIds and timestamps. It does not move admin users (create them in the admin) and assigns
new row ids in the order it reads them, which is why the importer leaves the tables in id order.
