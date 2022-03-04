export default {
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'abbreviation',
      title: 'Abbreviation',
      type: 'string',
    },
    {
      name: 'iso',
      title: 'ISO Code',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
