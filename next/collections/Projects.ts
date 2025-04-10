import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'applicant', // "appliciant" in Strapi
      type: 'text',
    },
    {
      name: 'amount',
      type: 'text',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'tag-categories',
      hasMany: true,
    },
    {
      name: 'support_fields',
      type: 'relationship',
      relationTo: 'tag-support-fields',
      hasMany: true,
    },
    {
      name: 'year',
      type: 'relationship',
      relationTo: 'tag-years',
    },
    {
      name: 'program',
      type: 'relationship',
      relationTo: 'tag-programs',
    },
    {
      name: 'districts',
      type: 'relationship',
      relationTo: 'tag-districts',
      hasMany: true,
    },
    {
      name: 'legal_form',
      type: 'relationship',
      relationTo: 'tag-legal-forms',
    },
    {
      name: 'goals',
      type: 'relationship',
      relationTo: 'tag-goals',
      hasMany: true,
    },
  ],
}
