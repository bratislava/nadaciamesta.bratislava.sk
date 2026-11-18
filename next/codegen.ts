import type { CodegenConfig } from '@graphql-codegen/cli'

// Generates graphql/index.ts from a running Strapi (`npm run develop` in ../strapi).
const config: CodegenConfig = {
  schema: process.env.CODEGEN_SCHEMA_URL ?? 'http://localhost:1337/graphql',
  documents: './graphql/queries/**/*.{gql,graphql}',
  generates: {
    'graphql/index.ts': {
      plugins: ['typescript-operations', 'typescript-graphql-request'],
      config: {
        scalars: {
          JSON: 'any',
          DateTime: 'string',
          Date: 'string',
          Long: 'number',
          I18NLocaleCode: 'string',
        },
      },
    },
  },
}

export default config
