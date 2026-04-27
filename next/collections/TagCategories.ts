import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagCategories: CollectionConfig = {
  slug: 'tag-categories',
  fields: [TagNameField],
}
