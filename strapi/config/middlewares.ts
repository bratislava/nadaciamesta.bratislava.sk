import type { Core } from '@strapi/strapi'

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => {
  // Media is served straight from the MinIO bucket (and, until the media move,
  // from the legacy Azure container), so the admin needs to be allowed to load it.
  const mediaHosts = [
    env('MINIO_PUBLIC_ENDPOINT', '').replace(/^https?:\/\//, ''),
    'nadaciadev.blob.core.windows.net',
  ].filter(Boolean)

  return [
    'strapi::logger',
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', ...mediaHosts],
            'media-src': ["'self'", 'data:', 'blob:', ...mediaHosts],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ]
}

export default config
