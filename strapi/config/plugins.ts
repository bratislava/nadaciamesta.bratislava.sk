import type { Core } from '@strapi/strapi'

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      landingPage: env.bool('GRAPHQL_PLAYGROUND', false),
      depthLimit: 7,
      // Strapi v3 returned everything up to its amountLimit (500) when no
      // limit was given; the site relies on that (e.g. all documents at once).
      defaultLimit: 500,
      maxLimit: 500,
      apolloServer: {
        tracing: false,
      },
    },
  },
})

export default config
