import type { Core } from '@strapi/strapi'

// Read access the public (unauthenticated) role needs for the website. Kept
// here so a fresh database serves the site without clicking through the admin.
const PUBLIC_ACTIONS = [
  ...[
    'blog-post',
    'contact',
    'document',
    'grant',
    'project',
    'tag-category',
    'tag-district',
    'tag-goal',
    'tag-legal-form',
    'tag-program',
    'tag-support-field',
    'tag-year',
  ].flatMap((name) => [`api::${name}.${name}.find`, `api::${name}.${name}.findOne`]),
  ...['about-us', 'general', 'landing-page', 'legal'].map((name) => `api::${name}.${name}.find`),
]

const grantPublicPermissions = async (strapi: Core.Strapi) => {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } })
  if (!publicRole) return

  const existing = await strapi
    .query('plugin::users-permissions.permission')
    .findMany({ where: { role: publicRole.id }, select: ['action'] })
  const have = new Set(existing.map((permission) => permission.action))

  for (const action of PUBLIC_ACTIONS.filter((a) => !have.has(a))) {
    await strapi
      .query('plugin::users-permissions.permission')
      .create({ data: { action, role: publicRole.id } })
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await grantPublicPermissions(strapi)

    const search = strapi.service('api::search.search')
    await search.rebuild()

    // Unlike v3 (index built once at boot), keep search in sync with edits.
    strapi.db.lifecycles.subscribe({
      models: search.indexedUids,
      afterCreate: () => search.scheduleRebuild(),
      afterUpdate: () => search.scheduleRebuild(),
      afterDelete: () => search.scheduleRebuild(),
    })
  },
}
