# nadaciamesta.bratislava.sk

Website of Nadácia mesta Bratislavy: a Next.js site (`next/`) backed by Strapi 5 (`strapi/`).

Node 26 and npm 12 (see `engines` in each `package.json`).

## Run locally

```bash
docker compose up -d postgres

cd strapi
cp .env.example .env
npm ci
npm run develop          # http://localhost:1337/admin

cd ../next
cp .env.example .env.local
npm ci
npm run dev              # http://localhost:3000
```

After changing a Strapi content type, regenerate the GraphQL client with Strapi running:
`npm run gen` in `next/`.

To get production-like data locally, import a Strapi v3 dump with the importer in
[`strapi/scripts/migrate-v3`](strapi/scripts/migrate-v3/README.md).

## Checks

Both services have a Docker `check` target, which is what CI runs on every pull request:

```bash
docker build --target check next     # eslint, tsc, prettier
docker build --target check strapi   # tsc, prettier
```

Or directly: `npm run lint`, `npm run typecheck`, `npm run format:check`.

## Deployment

Images are built by GitHub Actions and pushed to the `nadaciamesta.bratislava.sk` Harbor
project; the Kubernetes resources live in
[infrastructure-deployment-configuration](https://github.com/bratislava/infrastructure-deployment-configuration)
under `clusters/<cluster>/applications/nadaciamesta.bratislava.sk/` (namespace `nadaciamesta`).

| Ref | Deploys to |
| --- | --- |
| push to `master` | staging |
| tag `dev…` / `staging…` / `prod…` | that cluster, both services |
| tag `dev-strapi…`, `dev-next…` (same for staging/prod) | one service |

The pipeline (`.github/workflows/deploy.yml`) builds and pushes the images, then dispatches the
infra repo's deploy workflow, which applies `<service>/app` and waits for the rollout.

Configuration:

- `<service>/.env.deploy.<cluster>`: non-secret runtime env, read by Terraform at the commit the
  image was built from. Every file must exist for every cluster.
- `next/.env.build.<cluster>`: baked into the Next.js build (public Strapi URL for the
  browser-side `/graphql` and `/search` proxies).
- Secrets: Passbolt entries `<cluster>/nadaciamesta-strapi/*` and `<cluster>/nadaciamesta-next/*`,
  synced into the namespace by External Secrets.
- Media: MinIO bucket `nadaciamesta` on s3.bratislava.sk, shared by all clusters.

| | Next | Strapi |
| --- | --- | --- |
| development | https://nadaciamesta-next.dev.bratislava.sk | https://nadaciamesta-strapi.dev.bratislava.sk |
| staging | https://nadaciamesta-next.staging.bratislava.sk | https://nadaciamesta-strapi.staging.bratislava.sk |
| production | https://nadaciamesta.bratislava.sk | https://nadaciamesta-strapi.bratislava.sk |
