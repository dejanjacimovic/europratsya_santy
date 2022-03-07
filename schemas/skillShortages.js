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
      name: 'job_categories',
      title: 'Job Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'job_category' } }],
    },
    {
      name: 'countries',
      title: 'Countries',
      type: 'reference',
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
