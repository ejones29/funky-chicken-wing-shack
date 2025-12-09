import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'navigation',
      type: 'array',
      of: [{type: 'menuSection'}],
    }),
    defineField({
      name: 'footerText',
      type: 'string',
    }),
  ],
})
