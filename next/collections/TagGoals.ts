import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagGoals: CollectionConfig = {
  slug: 'tag-goals',
  fields: [TagNameField],
}
