export default {
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multilingualTitle',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.min(3).error('A slug of min. 3 characters is required'),
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
    {
      name: 'seo',
      title: 'SEO Tags',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
};
