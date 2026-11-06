import type { Core } from '@strapi/strapi'

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async search(ctx) {
    ctx.body = await strapi.service('api::search.search').search(ctx.params.query)
  },
})
