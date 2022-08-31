export default {
  name: 'seo',
  title: 'SEO Tags',
  type: 'object',
  fields: [
    {
      title: 'English Title',
      name: 'title_en',
      type: 'string',
    },
    {
      title: 'Ukrainian Title',
      name: 'title_uk',
      type: 'string',
    },
    {
      title: 'English Description',
      name: 'description_en',
      type: 'string',
    },
    {
      title: 'Ukrainian Description',
      name: 'description_uk',
      type: 'string',
    },
    {
      name: 'seo_image',
      title: 'SEO Image',
      type: 'image',
    },
  ],
};
