FROM node:24-alpine AS base

FROM base AS build-base
WORKDIR /build
COPY ./package.json ./package-lock.json ./

FROM build-base AS install-prod
RUN npm ci --omit=dev

FROM install-prod AS build
COPY . ./
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm ci \
 && npm run build

FROM base AS app-base
RUN apk add --no-cache tini
RUN mkdir -p /home/node/app \
 && chown node:node /home/node/app
USER node
WORKDIR /home/node/app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
EXPOSE 3000
ARG GIT_COMMIT="undefined"
ENV GIT_COMMIT=$GIT_COMMIT
LABEL org.opencontainers.image.revision="${GIT_COMMIT}" \
      org.opencontainers.image.source="https://github.com/bratislava/nadaciamesta.bratislava.sk" \
      org.opencontainers.image.licenses="EUPL-1.2"
ENTRYPOINT [ "/sbin/tini", "--" ]

FROM app-base AS dev
ENV NODE_ENV=development
COPY --chown=node:node --from=build /build/node_modules ./node_modules
CMD [ "npm", "run", "develop" ]

FROM app-base AS prod
COPY --chown=node:node .env.*.local ./
COPY --chown=node:node --from=build /build/.next/standalone ./
COPY --chown=node:node --from=build /build/public ./public
COPY --chown=node:node --from=build /build/.next/static ./.next/static
COPY --chown=node:node --from=build /build/node_modules/sharp ./node_modules/sharp

ENV NEXT_SHARP_PATH=/home/node/app/node_modules/sharp

CMD [ "sh", "-c", "HOSTNAME=0.0.0.0 node server.js" ]
