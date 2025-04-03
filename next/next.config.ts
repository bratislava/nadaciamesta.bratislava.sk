import { NextConfig } from 'next'
import svgoConfig from './svgo.config.js'

const svgrLoader = {
  loader: '@svgr/webpack',
  options: {
    svgoConfig,
  },
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
  output: 'standalone',
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

  // Docs: https://react-svgr.com/docs/next/
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'))

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

export default nextConfig
