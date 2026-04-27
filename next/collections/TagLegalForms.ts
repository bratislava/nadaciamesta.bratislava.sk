import type { CollectionConfig } from 'payload'

import { TagNameField } from '@/collections/fields/tag-name-field'

export const TagLegalForms: CollectionConfig = {
  slug: 'tag-legal-forms',
  fields: [TagNameField],
}
