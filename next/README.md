# Bratislava City Gallery website

Install dependencies:

```bash
yarn
```

To start the frontend app, simply run:

```bash
yarn dev
# the same as yarn develop
```

## Strapi SDK for city-foundation

When you change something in Strapi Content type builder, and/or if you change GraphQL queries, you always need to generate new types using Strapi SKD.

To generate new types:

```
yarn gen
```

For more information, refer to [the documentation](/docs/libs/Strapi-SDK.md).

## Static Site Generation

If you want to test static site generation locally, you need to run `yarn build` and `yarn start`. This commands run by default with the prod env variable, so in order to have the local env variable for strapi, you need to create `.env.local` with `STRAPI_URL=localhost:1337` to override the prod values. This file is ignored by git, because it often contains sensitive secrets

## Mailgun

If you wish to send emails (i.e. about new newsletter subscriptions), you need to get the Mailgun API key - the key is the same for procution and for development.
