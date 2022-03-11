export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
    },
    {
      name: 'application_email',
      title: 'Application email address',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'origin',
      title: 'Origin',
      type: 'reference',
      to: { type: 'country' },
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
      title: 'name',
      media: 'image',
    },
  },
};
