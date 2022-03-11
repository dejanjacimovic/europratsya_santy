export default {
  name: 'job_post',
  title: 'Job Post',
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
        source: 'title.en',
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
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'country' },
    },
    {
      name: 'contact',
      title: 'Contact (email)',
      type: 'string',
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'string',
    },
    {
      name: 'job_categories',
      title: 'Job Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'job_category' } }],
    },
    {
      name: 'job_languages',
      title: 'One required language',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'language' } }],
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
      type: 'multilingualDescription',
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
