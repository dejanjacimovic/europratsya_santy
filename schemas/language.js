export default {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
