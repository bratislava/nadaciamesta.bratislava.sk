import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagYears: CollectionConfig = {
  slug: 'tag-years',
  fields: [TagNameField],
}
