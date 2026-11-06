# Strapi (nadaciamesta.bratislava.sk)

Strapi 5, PostgreSQL, GraphQL (`/graphql`) and REST (`/api`).

- Content types: `src/api/*/content-types`, the one component in `src/components`.
- Search: `GET /api/search/:query` (`src/api/search`), an in-memory FlexSearch index over the
  titles of published projects, grants, documents and blog posts. Next proxies it as
  `/search/:query`. The index is rebuilt on start and a few seconds after any change.
- Blog post slugs follow the title (`src/api/blog-post/content-types/blog-post/lifecycles.ts`).
- The public role's read permissions are granted on every start (`src/index.ts`).
- Media: local `public/uploads` in development, the MinIO bucket in deployed clusters
  (`config/env/production/plugins.ts`).

Local setup is in the [root README](../README.md). The v3 → v5 data migration is in
[scripts/migrate-v3](scripts/migrate-v3/README.md).
