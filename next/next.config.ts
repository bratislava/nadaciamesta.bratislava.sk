import { NextConfig } from 'next'
import type { Config as SvgrConfig } from '@svgr/core'

const svgoConfig = require('./svgo.config.js')

const svgrLoader = {
  loader: '@svgr/webpack',
  options: {
    svgoConfig,
  } satisfies SvgrConfig,
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'nadaciadev.blob.core.windows.net',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: [svgrLoader],
          as: '*.js',
        },
      },
      // resolveAlias: {
      //   react: 'react',
      //   'react-dom': 'react-dom',
      // },
    },
  },
  async rewrites() {
    const protocol =
      process.env.STRAPI_URL &&
      (process.env.STRAPI_URL.startsWith('http://') ||
        process.env.STRAPI_URL.startsWith('https://'))
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
    // Docs: https://react-svgr.com/docs/next/
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: {
            loader: '@svgr/webpack',
            options: { svgoConfig },
          },
        },
      )

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i

      return config
    },
  }
}

module.exports = config
