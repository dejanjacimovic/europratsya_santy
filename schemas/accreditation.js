export default {
  name: 'accreditation',
  title: 'Accreditation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multilingualTitle',
    },
    {
      name: 'countries',
      title: 'Countries',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'country' } }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multilingualDescription',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
};
