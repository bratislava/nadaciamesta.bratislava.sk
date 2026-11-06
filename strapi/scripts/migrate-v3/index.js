/* eslint-disable no-console */
/**
 * One-off import of the Strapi v3 production database into a fresh Strapi 5
 * database. See README.md next to this file for the full procedure.
 *
 *   V3_DATABASE_URL=postgres://user:pass@host:port/db \
 *   MEDIA_PUBLIC_URL=https://nadaciamesta.s3.bratislava.sk \
 *   node scripts/migrate-v3/index.js
 *
 * The Strapi 5 side is configured like the app itself (DATABASE_* env, .env).
 * The target database must be empty apart from what Strapi creates on its own
 * first boot (schema, admin roles, users-permissions roles).
 *
 * Content goes in through the Document Service, so drafts, published versions,
 * relations, components and media links are written by Strapi itself. Afterwards
 * the script patches what the Document Service doesn't let you set:
 *   - documentId = `v3_<v3 id>`, so URLs like /projects/585 keep working (the
 *     frontend maps between the two). Not the bare id: Strapi reads an
 *     all-digit relation value as a row id, not a documentId.
 *   - created/updated/published timestamps and created/updated by,
 *   - blog slugs (the slug lifecycle would recompute them).
 */
// Timestamps are stored without time zone; write them as UTC like the pods do.
process.env.TZ = 'UTC'

const { Client } = require('pg')
const { createStrapi, compileStrapi } = require('@strapi/strapi')

const V3_UID = {
  'application::about-us.about-us': 'api::about-us.about-us',
  'application::blog-post.blog-post': 'api::blog-post.blog-post',
  'application::contacts.contacts': 'api::contact.contact',
  'application::documents.documents': 'api::document.document',
  'application::general.general': 'api::general.general',
  'application::grants.grants': 'api::grant.grant',
  'application::landing-page.landing-page': 'api::landing-page.landing-page',
  'application::legal.legal': 'api::legal.legal',
  'application::project.project': 'api::project.project',
  'application::tag-category.tag-category': 'api::tag-category.tag-category',
  'application::tag-district.tag-district': 'api::tag-district.tag-district',
  'application::tag-goal.tag-goal': 'api::tag-goal.tag-goal',
  'application::tag-legal-form.tag-legal-form': 'api::tag-legal-form.tag-legal-form',
  'application::tag-program.tag-program': 'api::tag-program.tag-program',
  'application::tag-support-field.tag-support-field': 'api::tag-support-field.tag-support-field',
  'application::tag-year.tag-year': 'api::tag-year.tag-year',
}

const TAGS = [
  ['tag_categories', 'api::tag-category.tag-category'],
  ['tag_districts', 'api::tag-district.tag-district'],
  ['tag_goals', 'api::tag-goal.tag-goal'],
  ['tag_legal_forms', 'api::tag-legal-form.tag-legal-form'],
  ['tag_programs', 'api::tag-program.tag-program'],
  ['tag_support_fields', 'api::tag-support-field.tag-support-field'],
  ['tag_years', 'api::tag-year.tag-year'],
]

const TIMESTAMP_RENAMES = {
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  published_at: 'publishedAt',
}

const LEGACY_PREFIX = 'v3_'
const legacyDocumentId = (id) => `${LEGACY_PREFIX}${id}`

const log = (...args) => console.log('[migrate-v3]', ...args)

const main = async () => {
  if (!process.env.V3_DATABASE_URL) throw new Error('V3_DATABASE_URL is required')
  const mediaPublicUrl = (process.env.MEDIA_PUBLIC_URL || '').replace(/\/$/, '')

  const v3 = new Client({ connectionString: process.env.V3_DATABASE_URL })
  await v3.connect()
  const q = async (sql, params) => (await v3.query(sql, params)).rows

  const strapi = await createStrapi(await compileStrapi()).load()
  const knex = strapi.db.connection

  try {
    const projectCount = await knex('projects').count({ count: '*' }).first()
    if (Number(projectCount.count) > 0) {
      throw new Error('Target database already has projects - import into a fresh database')
    }

    // ---------------------------------------------------------------- admins
    const roles = await strapi.db.query('admin::role').findMany()
    const roleByCode = Object.fromEntries(roles.map((role) => [role.code, role.id]))
    const v3RoleCode = Object.fromEntries(
      (await q('select id, code from strapi_role')).map((r) => [r.id, r.code]),
    )
    const v3UserRoles = await q('select user_id, role_id from strapi_users_roles order by id')
    const adminMap = {}
    for (const admin of await q('select * from strapi_administrator order by id')) {
      const roleIds = v3UserRoles
        .filter((ur) => ur.user_id === admin.id)
        .map((ur) => roleByCode[v3RoleCode[ur.role_id]])
        .filter(Boolean)
      // db.query skips the admin service's hashing, so the v3 bcrypt hash is
      // kept as is and everyone keeps their password.
      const created = await strapi.db.query('admin::user').create({
        data: {
          firstname: admin.firstname,
          lastname: admin.lastname,
          username: admin.username || null,
          email: admin.email.toLowerCase(),
          password: admin.password,
          isActive: admin.isActive,
          blocked: admin.blocked ?? false,
          preferedLanguage: admin.preferedLanguage,
          roles: roleIds,
        },
      })
      adminMap[admin.id] = created.id
    }
    log(`admins: ${Object.keys(adminMap).length}`)

    // ----------------------------------------------------------------- files
    const rewriteUrl = (file) =>
      mediaPublicUrl ? `${mediaPublicUrl}/upload/${file.hash}${file.ext}` : file.url
    const fileMap = {}
    for (const file of await q('select * from upload_file order by id')) {
      // Strapi registers its own pg type parsers, so jsonb may arrive as text.
      let formats = typeof file.formats === 'string' ? JSON.parse(file.formats) : file.formats
      if (formats && mediaPublicUrl) {
        formats = Object.fromEntries(
          Object.entries(formats).map(([key, format]) => [
            key,
            { ...format, url: rewriteUrl(format) },
          ]),
        )
      }
      const created = await strapi.db.query('plugin::upload.file').create({
        data: {
          name: file.name,
          alternativeText: file.alternativeText || null,
          caption: file.caption || null,
          width: file.width,
          height: file.height,
          formats,
          hash: file.hash,
          ext: file.ext,
          mime: file.mime,
          size: file.size,
          url: rewriteUrl(file),
          previewUrl: file.previewUrl,
          provider: mediaPublicUrl ? 'aws-s3' : file.provider,
          provider_metadata: mediaPublicUrl
            ? null
            : typeof file.provider_metadata === 'string'
              ? JSON.parse(file.provider_metadata)
              : file.provider_metadata,
          folderPath: '/',
        },
      })
      fileMap[file.id] = created.id
      await knex('files')
        .where({ id: created.id })
        .update({
          created_at: file.created_at,
          updated_at: file.updated_at,
          created_by_id: adminMap[file.created_by] ?? null,
          updated_by_id: adminMap[file.updated_by] ?? null,
        })
    }
    log(`files: ${Object.keys(fileMap).length}`)

    const morphs = await q(
      'select * from upload_file_morph order by related_type, related_id, field, "order", id',
    )
    const filesOf = (relatedType, relatedId, field) =>
      morphs
        .filter(
          (m) => m.related_type === relatedType && m.related_id === relatedId && m.field === field,
        )
        .map((m) => fileMap[m.upload_file_id])
        .filter(Boolean)
    const fileOf = (relatedType, relatedId, field) =>
      filesOf(relatedType, relatedId, field)[0] ?? null

    // ------------------------------------------------------------- documents
    // Rows are read in physical (ctid) order: v3 listed unsorted collections in
    // that order, and the site sorts the imported entries by id to match it.
    const patches = []
    const createDocument = async (uid, row, data, { draftAndPublish }) => {
      const status = draftAndPublish && row.published_at ? 'published' : undefined
      const doc = await strapi.documents(uid).create({ data, status })
      patches.push({ uid, documentId: doc.documentId, row })
      return doc
    }

    // v3 had no cascading deletes, so join tables still point at deleted rows.
    const existing = {}
    const loadExisting = async (table) => {
      existing[table] = new Set((await q(`select id from ${table}`)).map((r) => String(r.id)))
    }
    const TARGET_TABLE = {
      'tag-category_id': 'tag_categories',
      'tag-district_id': 'tag_districts',
      'tag-goal_id': 'tag_goals',
      'tag-support-field_id': 'tag_support_fields',
      project_id: 'projects',
    }
    const ids = (rows, column) =>
      rows
        .map((r) => String(r[column]))
        .filter((id) => existing[TARGET_TABLE[column]].has(id))
        .map((id) => ({ documentId: legacyDocumentId(id) }))
    const one = (table, id) =>
      id && existing[table].has(String(id)) ? { documentId: legacyDocumentId(id) } : null
    for (const table of [
      ...new Set(Object.values(TARGET_TABLE)),
      'tag_years',
      'tag_programs',
      'tag_legal_forms',
    ]) {
      await loadExisting(table)
    }

    for (const [table, uid] of TAGS) {
      const rows = await q(`select * from ${table} order by ctid`)
      for (const row of rows) {
        await createDocument(uid, row, { name: row.name }, { draftAndPublish: false })
      }
      log(`${table}: ${rows.length}`)
    }
    // Tags must have their final documentIds before anything relates to them.
    await applyPatches(knex, strapi, patches.splice(0), adminMap)

    const projects = await q('select * from projects order by ctid')
    const join = async (table, column) => {
      const rows = await q(`select * from ${table} order by ctid`)
      return (projectId) =>
        ids(
          rows.filter((r) => r.project_id === projectId),
          column,
        )
    }
    const categoriesOf = await join('projects__categories', 'tag-category_id')
    const districtsOf = await join('projects__districts', 'tag-district_id')
    const goalsOf = await join('projects__goals', 'tag-goal_id')
    const supportFieldsOf = await join('projects__support_fields', 'tag-support-field_id')
    for (const row of projects) {
      await createDocument(
        'api::project.project',
        row,
        {
          title: row.title,
          description: row.description,
          appliciant: row.appliciant,
          amount: row.amount,
          images: filesOf('projects', row.id, 'images'),
          categories: categoriesOf(row.id),
          districts: districtsOf(row.id),
          goals: goalsOf(row.id),
          support_fields: supportFieldsOf(row.id),
          year: one('tag_years', row.year),
          program: one('tag_programs', row.program),
          legal_form: one('tag_legal_forms', row.legal_form),
        },
        { draftAndPublish: true },
      )
    }
    log(`projects: ${projects.length}`)

    const grants = await q('select * from grants order by ctid')
    for (const row of grants) {
      await createDocument(
        'api::grant.grant',
        row,
        {
          title: row.title,
          description: row.description,
          link: row.link,
          order: row.order,
          program: one('tag_programs', row.program),
          files: filesOf('grants', row.id, 'files'),
        },
        { draftAndPublish: true },
      )
    }
    log(`grants: ${grants.length}`)

    const documents = await q('select * from documents order by ctid')
    for (const row of documents) {
      await createDocument(
        'api::document.document',
        row,
        { title: row.title, archived: row.archived, file: fileOf('documents', row.id, 'file') },
        { draftAndPublish: true },
      )
    }
    log(`documents: ${documents.length}`)

    const blogPosts = await q('select * from blog_posts order by ctid')
    for (const row of blogPosts) {
      await createDocument(
        'api::blog-post.blog-post',
        row,
        {
          title: row.title,
          description: row.description,
          content: row.content,
          slug: row.slug,
          author: row.author,
          image: fileOf('blog_posts', row.id, 'image'),
        },
        { draftAndPublish: true },
      )
    }
    log(`blog posts: ${blogPosts.length}`)

    const contacts = await q('select * from contacts order by ctid')
    for (const row of contacts) {
      await createDocument(
        'api::contact.contact',
        row,
        {
          full_name_including_degrees: row.full_name_including_degrees,
          email: row.email,
          role: row.role,
          phone: row.phone,
          photo: fileOf('contacts', row.id, 'photo'),
        },
        { draftAndPublish: false },
      )
    }
    log(`contacts: ${contacts.length}`)

    // Projects and the rest get their final documentIds before the single
    // types relate to them.
    await applyPatches(knex, strapi, patches.splice(0), adminMap)

    // ---------------------------------------------------------- single types
    const single = async (table, uid, toData, { draftAndPublish }) => {
      const [row] = await q(`select * from ${table} order by id limit 1`)
      if (!row) return
      await createDocument(uid, row, await toData(row), { draftAndPublish })
      // Single types keep their generated documentId.
      patches[patches.length - 1].keepDocumentId = true
      log(`${table}: 1`)
    }

    await single(
      'generals',
      'api::general.general',
      (row) => ({
        address: row.address,
        newsletter_text: row.newsletter_text,
        bank_account_url: row.bank_account_url,
        bank_account_iban: row.bank_account_iban,
        email: row.email,
        phone: row.phone,
        copyright_text: row.copyright_text,
        facebook_link: row.facebook_link,
        instagram_link: row.instagram_link,
      }),
      { draftAndPublish: false },
    )
    await single(
      'legals',
      'api::legal.legal',
      (row) => ({ project_detail_disclaimer: row.project_detail_disclaimer, gdpr: row.gdpr }),
      { draftAndPublish: true },
    )
    await single(
      'landing_page',
      'api::landing-page.landing-page',
      async (row) => ({
        description: row.description,
        grants_text: row.grants_text,
        grants_button_text: row.grants_button_text,
        featured_projects_top: ids(
          await q(
            'select * from landing_page__featured_projects_top where landing_page_id = $1 order by id',
            [row.id],
          ),
          'project_id',
        ),
        featured_projects_bottom: ids(
          await q(
            'select * from landing_page__featured_projects_bottom where landing_page_id = $1 order by id',
            [row.id],
          ),
          'project_id',
        ),
      }),
      { draftAndPublish: false },
    )
    await single(
      'about_uses',
      'api::about-us.about-us',
      async (row) => {
        const links = await q(
          `select l.component_id, s.title, s.detail
             from about_uses_components l
             join components_about_us_about_us_sections s on s.id = l.component_id
            where l.about_us_id = $1 and l.field = 'sections'
            order by l."order", l.id`,
          [row.id],
        )
        return {
          sections: links.map((link) => ({
            title: link.title,
            detail: link.detail,
            files: filesOf('components_about_us_about_us_sections', link.component_id, 'files'),
          })),
        }
      },
      { draftAndPublish: false },
    )

    await applyPatches(knex, strapi, patches.splice(0), adminMap)

    // ------------------------------------------- content-manager layouts
    await migrateContentManagerConfig(q, strapi)

    log('done')
  } finally {
    await v3.end()
    await strapi.destroy()
  }
}

/**
 * documentId = v3 id, original timestamps and authors on every row (draft and
 * published) of the document.
 */
const applyPatches = async (knex, strapi, patches, adminMap) => {
  for (const { uid, documentId, row, keepDocumentId } of patches) {
    const table = strapi.getModel(uid).collectionName
    const finalDocumentId = keepDocumentId ? documentId : legacyDocumentId(row.id)
    await knex(table)
      .where({ document_id: documentId })
      .update({
        document_id: finalDocumentId,
        created_at: row.created_at,
        updated_at: row.updated_at,
        created_by_id: adminMap[row.created_by] ?? null,
        updated_by_id: adminMap[row.updated_by] ?? null,
      })
    if (row.published_at) {
      await knex(table)
        .where({ document_id: finalDocumentId })
        .whereNotNull('published_at')
        .update({ published_at: row.published_at })
    }
    if (row.slug !== undefined && uid === 'api::blog-post.blog-post') {
      await knex(table).where({ document_id: finalDocumentId }).update({ slug: row.slug })
    }
  }
}

/**
 * Carry over the content-manager list/edit layouts, labels and sorting editors
 * set up in v3. v3 kept relations in a separate `editRelations` column; v5 has
 * them in the edit grid, so they are appended as rows of two.
 */
const migrateContentManagerConfig = async (q, strapi) => {
  const store = strapi.store({ type: 'plugin', name: 'content_manager' })
  const rows = await q(
    "select key, value from core_store where key like 'plugin_content_manager_configuration_%'",
  )
  const rename = (name) => TIMESTAMP_RENAMES[name] ?? name

  for (const { key, value } of rows) {
    const v3Config = JSON.parse(value)
    let v5Key
    if (key.startsWith('plugin_content_manager_configuration_components::')) {
      v5Key = key.replace('plugin_content_manager_configuration_', 'configuration_')
    } else {
      const v5Uid = V3_UID[v3Config.uid]
      if (!v5Uid) continue
      v5Key = `configuration_content_types::${v5Uid}`
    }

    const current = await store.get({ key: v5Key })
    if (!current) continue

    const known = new Set(Object.keys(current.metadatas))
    const metadatas = { ...current.metadatas }
    for (const [name, meta] of Object.entries(v3Config.metadatas ?? {})) {
      const v5Name = rename(name)
      if (!known.has(v5Name)) continue
      metadatas[v5Name] = {
        edit: { ...current.metadatas[v5Name].edit, ...meta.edit },
        list: { ...current.metadatas[v5Name].list, ...meta.list },
      }
    }

    const list = (v3Config.layouts?.list ?? []).map(rename).filter((name) => known.has(name))

    let edit = current.layouts.edit
    if (v3Config.layouts?.edit) {
      const placed = new Set()
      edit = v3Config.layouts.edit
        .map((row) =>
          row
            .filter((field) => known.has(field.name))
            .map((field) => {
              placed.add(field.name)
              return { name: field.name, size: field.size }
            }),
        )
        .filter((row) => row.length)
      const relations = (v3Config.layouts.editRelations ?? []).filter((name) => known.has(name))
      for (let i = 0; i < relations.length; i += 2) {
        edit.push(relations.slice(i, i + 2).map((name) => ({ name, size: 6 })))
        relations.slice(i, i + 2).forEach((name) => placed.add(name))
      }
      // Anything v5 added that v3 didn't know about stays at the end.
      for (const row of current.layouts.edit) {
        const rest = row.filter((field) => !placed.has(field.name))
        if (rest.length) edit.push(rest)
      }
    }

    const settings = { ...current.settings, ...v3Config.settings }
    settings.mainField = rename(settings.mainField)
    settings.defaultSortBy = rename(settings.defaultSortBy)

    await store.set({
      key: v5Key,
      value: {
        ...current,
        settings,
        metadatas,
        layouts: { ...current.layouts, list: list.length ? list : current.layouts.list, edit },
      },
    })
  }
  log('content-manager layouts: done')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
