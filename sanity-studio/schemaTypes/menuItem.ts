import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Item Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'priceOptions',
      type: 'array',
      of: [{type: 'priceOption'}],
    }),
    defineField({
      name: 'flavors',
      title: 'Available Flavors',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'flavor'}]}],
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'image',
    },
  },
})
