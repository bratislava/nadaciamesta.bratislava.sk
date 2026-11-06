import type { Core, UID } from '@strapi/strapi'
// flexsearch 0.7 ships no types
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Document } = require('flexsearch')

const PERIODIC_REBUILD_MS = 10 * 60 * 1000

type Indexed = { prefix: string; uid: UID.ContentType; fields: string[] }

// Result ids are `<prefix>-<documentId>`; the frontend splits on the dash to
// pick the link target, so the prefixes must stay as they were in v3.
const INDEXED: Indexed[] = [
  { prefix: 'project', uid: 'api::project.project', fields: ['title'] },
  { prefix: 'grant', uid: 'api::grant.grant', fields: ['title'] },
  { prefix: 'document', uid: 'api::document.document', fields: ['title'] },
  { prefix: 'blog', uid: 'api::blog-post.blog-post', fields: ['title', 'slug'] },
]

const createIndex = () =>
  new Document({
    language: 'sk',
    tokenize: 'full',
    encode: (text: string) =>
      text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .split(' ')
        .filter((str) => str.length)
        .map((str) => str.trim()),
    document: {
      id: 'id',
      index: ['title'],
      store: true,
    },
  })

export default ({ strapi }: { strapi: Core.Strapi }) => {
  let index = createIndex()
  let rebuildTimer: NodeJS.Timeout | undefined

  const rebuild = async () => {
    const next = createIndex()
    for (const { prefix, uid, fields } of INDEXED) {
      const entries = await strapi.documents(uid).findMany({
        status: 'published',
        fields: fields as never,
        limit: -1 as never,
      })
      for (const entry of entries as Array<Record<string, string>>) {
        next.add({ id: `${prefix}-${entry.documentId}`, title: entry.title, slug: entry.slug })
      }
    }
    index = next
  }

  return {
    rebuild,
    // Content changes are batched into one rebuild a few seconds later.
    scheduleRebuild() {
      clearTimeout(rebuildTimer)
      rebuildTimer = setTimeout(() => {
        rebuild().catch((error) => strapi.log.error('Search index rebuild failed', error))
      }, 5000)
    },
    async search(query: string) {
      return index.search(query, {
        limit: 10,
        index: ['title'],
        enrich: true,
      })
    },
    indexedUids: INDEXED.map(({ uid }) => uid),
    // Writes that bypass lifecycles (`strapi transfer`, `strapi import`, SQL)
    // show up at the next periodic rebuild.
    startPeriodicRebuild() {
      setInterval(() => {
        rebuild().catch((error) => strapi.log.error('Search index rebuild failed', error))
      }, PERIODIC_REBUILD_MS).unref()
    },
  }
}
