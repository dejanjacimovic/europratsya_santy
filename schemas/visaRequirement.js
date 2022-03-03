export default {
  name: 'visa_requirement',
  title: 'Visa Requirements',
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
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'country' },
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
  preview: {
    select: {
      title: 'title.en',
    },
  },
};
