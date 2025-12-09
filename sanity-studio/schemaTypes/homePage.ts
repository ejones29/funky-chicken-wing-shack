import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
    }),
    defineField({
      name: 'specials',
      title: 'Featured Specials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
    defineField({
      name: 'mascotImage',
      type: 'imageWithAlt',
    }),
  ],
})
