import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagPrograms: CollectionConfig = {
  slug: 'tag-programs',
  fields: [TagNameField],
}
