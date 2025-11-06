# production
FROM node:14.21.3 AS prod

RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

USER node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn config set network-timeout 600000 -g && \
    yarn install --production

COPY . ./

RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]
