import {defineType} from 'sanity'

export default defineType({
  name: 'menuSection',
  type: 'object',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'link', type: 'string'},
  ],
})
