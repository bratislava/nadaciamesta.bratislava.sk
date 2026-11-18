import slugify from 'slugify'

// Same behaviour as in v3: the slug always follows the title.
export default {
  beforeCreate(event) {
    const { data } = event.params
    if (data.title) {
      data.slug = slugify(data.title)
    }
  },
  beforeUpdate(event) {
    const { data } = event.params
    if (data.title) {
      data.slug = slugify(data.title)
    }
  },
}
