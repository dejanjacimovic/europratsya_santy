export default {
  name: 'skill_shortages',
  title: 'Skill shortages',
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
