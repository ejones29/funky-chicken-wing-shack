import {defineType} from 'sanity'

export const flavor = defineType({
  name: 'flavor',
  title: 'Flavors',
  type: 'document',
  icon: () => '🔥',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'spiceLevel',
      title: 'Spice Level',
      type: 'number',
      description: 'Scale from 1 (mild) to 10 (extremely spicy)',
      validation: (Rule) => Rule.min(1).max(10),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Dry', value: 'dry'},
          {title: 'Wet', value: 'wet'},
        ],
      },
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
})
