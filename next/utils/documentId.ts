// Entries imported from Strapi v3 have documentId `v3_<v3 id>`; the site keeps
// showing them under their v3 URLs (/projects/585). New entries use their
// Strapi documentId as is.
const LEGACY_PREFIX = 'v3_'

export const toUrlId = (documentId: string) =>
  documentId.startsWith(LEGACY_PREFIX) ? documentId.slice(LEGACY_PREFIX.length) : documentId

export const fromUrlId = (urlId: string) =>
  /^\d+$/.test(urlId) ? `${LEGACY_PREFIX}${urlId}` : urlId
