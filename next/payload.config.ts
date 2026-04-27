// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Projects } from '@/collections/Projects'
import { Contacts } from '@/collections/Contacts'
import { Documents } from '@/collections/Documents'
import { TagCategories } from '@/collections/TagCategories'
import { TagDistricts } from '@/collections/TagDistricts'
import { TagGoals } from '@/collections/TagGoals'
import { TagPrograms } from '@/collections/TagPrograms'
import { TagLegalForms } from '@/collections/TagLegalForms'
import { TagSupportFields } from '@/collections/TagSupportFields'
import { TagYears } from '@/collections/TagYears'
import { Grants } from '@/collections/Grants'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Projects,
    Contacts,
    Documents,
    Grants,
    TagCategories,
    TagDistricts,
    TagGoals,
    TagLegalForms,
    TagPrograms,
    TagSupportFields,
    TagYears,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
