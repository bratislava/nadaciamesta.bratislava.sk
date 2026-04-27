import type { Field } from 'payload'

export const TagNameField: Field = {
  name: 'name',
  type: 'text',
  required: true,
  unique: true,
}
