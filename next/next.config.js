// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['nadaciadev.blob.core.windows.net'],
  },
  async rewrites() {
    const protocol =
      process.env.STRAPI_URL &&
      (process.env.STRAPI_URL.startsWith('http://') || process.env.STRAPI_URL.startsWith('https://'))
        ? ''
        : 'http://'

    return {
      beforeFiles: [
        // Graphql Proxy
        {
          source: '/graphql',
          destination: `${protocol}${process.env.STRAPI_URL}/graphql`,
        },
        // Media proxy for getting media from Strapi
        {
          source: '/uploads/:file',
          destination: `${protocol}${process.env.STRAPI_URL}/uploads/:file`,
        },
        // Search Proxy
        {
          source: '/search/:query',
          destination: `${protocol}${process.env.STRAPI_URL}/search/:query`,
        },
      ],
    }
  },
  serverRuntimeConfig: {
    strapiUrl: process.env.STRAPI_URL,
  },
}

const config = (phase, { defaultConfig }) => {
  return {
    /** NOTE: Extending the default config produces a bunch of warnings
     * in the console. While it shouldn't be necessary to extend
     * the default config in the first place,
     * in future versions of Next.js, it should be fixed and
     * not produce warnings. More information here:
     * https://github.com/vercel/next.js/issues/39161#issuecomment-1201138777
     * https://github.com/vercel/next.js/pull/39220
     */
    ...defaultConfig,
    ...nextConfig,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  }
}

module.exports = config
