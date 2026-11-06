FROM node:26-alpine AS base

FROM base AS build-base
# npm 12 only where npm ci runs; runtime stages keep the stock npm.
RUN npm install -g npm@12.0.2
WORKDIR /build
COPY package.json package-lock.json .npmrc ./

FROM build-base AS install-prod
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM build-base AS install-dev
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev
COPY . ./

FROM install-dev AS build
ENV NODE_ENV=production
RUN npm run build

# ---- CI check stage (dockerized typecheck / format) ----
FROM install-dev AS check
RUN npm run typecheck \
 && npm run format:check

FROM base AS app-base
RUN apk add --no-cache tini \
 && mkdir -p /home/node/app \
 && chown node:node /home/node/app
USER node
WORKDIR /home/node/app
# Adds the strapi CLI to the PATH
ENV PATH=/home/node/app/node_modules/.bin:$PATH
ENV NODE_ENV=production
EXPOSE 1337
ARG GIT_COMMIT="undefined"
ENV GIT_COMMIT=$GIT_COMMIT
LABEL org.opencontainers.image.revision="${GIT_COMMIT}" \
      org.opencontainers.image.source="https://github.com/bratislava/nadaciamesta.bratislava.sk/tree/master/strapi" \
      org.opencontainers.image.licenses="EUPL-1.2"
ENTRYPOINT [ "/sbin/tini", "--" ]

FROM app-base AS dev
ENV NODE_ENV=development
COPY --chown=node:node --from=install-dev /build/node_modules ./node_modules
COPY --chown=node:node . ./
CMD [ "npm", "run", "develop" ]

FROM app-base AS prod
COPY --chown=node:node --from=build /build/package.json /build/tsconfig.json ./
COPY --chown=node:node --from=install-prod /build/node_modules ./node_modules
COPY --chown=node:node --from=build /build/dist ./dist
COPY --chown=node:node --from=build /build/public ./public
# Strapi keeps its migration state here and mkdirs it at boot; ship it so the
# read-only root filesystem in the cluster needs no emptyDir over it.
COPY --chown=node:node --from=build /build/database ./database
CMD [ "strapi", "start" ]
