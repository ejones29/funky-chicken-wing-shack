import {defineType} from 'sanity'

export default defineType({
  name: 'priceOption',
  type: 'object',
  fields: [
    {name: 'label', type: 'string'},
    {name: 'price', type: 'number'},
  ],
})
