import type { Core } from '@strapi/strapi'

// Deployed clusters only (deep-merged over config/plugins.ts); local
// development keeps the default local upload provider.
const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      // Docs: https://docs.strapi.io/cms/configurations/media-library-providers/amazon-s3
      provider: 'aws-s3',
      providerOptions: {
        // "Subdomain" style urls, e.g. https://nadaciamesta.s3.bratislava.sk/upload/...
        baseUrl: env('MINIO_PUBLIC_ENDPOINT'),
        // Works like a folder inside the bucket
        rootPath: 'upload',
        s3Options: {
          credentials: {
            accessKeyId: env('MINIO_ACCESS_KEY'),
            secretAccessKey: env('MINIO_SECRET_KEY'),
          },
          endpoint: env('MINIO_PRIVATE_ENDPOINT'),
          region: 'bratislava',
          forcePathStyle: true,
          params: {
            Bucket: env('MINIO_BUCKET'),
          },
        },
      },
    },
  },
})

export default config
