import type { CollectionConfig } from 'payload'

export const Grants: CollectionConfig = {
  slug: 'grants',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'program',
      type: 'relationship',
      relationTo: 'tag-programs',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'files',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
}
