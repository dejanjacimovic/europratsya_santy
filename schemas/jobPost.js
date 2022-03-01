export default {
  name: 'job_post',
  title: 'Job Post',
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
      name: 'employer',
      title: 'Employer',
      type: 'reference',
      to: { type: 'company' },
    },
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'country' },
    },
    {
      name: 'job_categories',
      title: 'Job Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'job_category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'validUntil',
      title: 'Valid until',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
};
