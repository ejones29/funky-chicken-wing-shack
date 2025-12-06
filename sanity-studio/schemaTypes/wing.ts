export default {
  name: 'wing',
  title: 'Wings',
  type: 'document',
  icon: () => '🍗',
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
      name: 'heatLevel',
      title: 'Heat Level',
      type: 'number',
      description: 'Scale from 1 (mild) to 10 (extremely spicy)',
      validation: (Rule) => Rule.min(1).max(10),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
