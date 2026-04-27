import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagDistricts: CollectionConfig = {
  slug: 'tag-districts',
  fields: [TagNameField],
}
