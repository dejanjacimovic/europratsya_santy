export default {
  name: 'visa_requirement',
  title: 'Visa Requirements',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multilingualTitle',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'country' },
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
