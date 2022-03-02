export default {
  name: 'job_post',
  title: 'Job Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          title: 'English Title',
          name: 'en',
          type: 'string',
        },
        {
          title: 'Ukrainian Title',
          name: 'uk',
          type: 'string',
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'blockContent',
        },
        {
          title: 'Ukrainian',
          name: 'uk',
          type: 'blockContent',
        },
      ],
    },
  ],
};
