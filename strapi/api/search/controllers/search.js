'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async search(ctx) {
    // Searching in resources
    const results = await strapi.services.search.search(ctx.params.query);

    try {
      ctx.body = JSON.stringify(results);
    } catch (err) {
      ctx.body = err;
    }
  },
};
