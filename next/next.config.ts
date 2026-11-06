import type { NextConfig } from 'next'

import svgoConfig from './svgo.config.js'

// STRAPI_URL may be a bare in-cluster service name (e.g. "nadaciamesta-strapi"),
// which is how the deployed pods reach Strapi.
const strapiUrl = (() => {
  const url = process.env.STRAPI_URL ?? ''
  return url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`
})()

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'nadaciamesta.s3.bratislava.sk' },
      { protocol: 'https', hostname: 'nadaciadev.blob.core.windows.net' },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [{ loader: '@svgr/webpack', options: { svgoConfig } }],
        as: '*.js',
      },
    },
  },
  async rewrites() {
    return {
      beforeFiles: [
        // GraphQL proxy for browser-side queries
        { source: '/graphql', destination: `${strapiUrl}/graphql` },
        // Media proxy for files Strapi serves itself (local upload provider)
        { source: '/uploads/:file', destination: `${strapiUrl}/uploads/:file` },
        // Search proxy (Strapi 5 serves its routes under /api)
        { source: '/search/:query', destination: `${strapiUrl}/api/search/:query` },
      ],
    }
  },
}

export default nextConfig
