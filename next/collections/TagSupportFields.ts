import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagSupportFields: CollectionConfig = {
  slug: 'tag-support-fields',
  fields: [TagNameField],
}
