export default {
  name: 'page',
  title: 'Page',
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
      name: 'body',
      title: 'Body',
      type: 'multilingualDescription',
    },
    {
      name: 'sidebarImage',
      title: 'Sidebar image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'footnote',
      title: 'Image footnote',
      type: 'string',
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'sidebarImage',
    },
  },
};
