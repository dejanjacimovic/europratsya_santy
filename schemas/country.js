export default {
  name: 'country',
  title: 'Country',
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
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((field, context) =>
          context.document.flag && field === undefined
            ? 'This field must not be empty.'
            : true
        ),
    },
    {
      name: 'abbreviation',
      title: 'Abbreviation',
      type: 'string',
    },
    {
      name: 'iso',
      title: 'ISO Code',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills shortages page',
      type: 'reference',
      to: { type: 'skill_shortages' },
    },
    {
      name: 'visa',
      title: 'Visa requirements page',
      type: 'reference',
      to: { type: 'visa_requirement' },
    },
    {
      name: 'accreditations',
      title: 'Accreditation page',
      type: 'reference',
      to: { type: 'accreditation' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multilingualDescription',
    },
    {
      name: 'skill_shortages',
      title: 'Skills Shortages',
      type: 'reference',
      to: { type: 'skill_shortages' },
    },
    {
      name: 'visa_requirement',
      title: 'Visa Requirements',
      type: 'reference',
      to: { type: 'visa_requirement' },
    },
    {
      name: 'accreditation',
      title: 'Accreditation',
      type: 'reference',
      to: { type: 'accreditation' },
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
  orderings: [
    {
      title: 'Country Name',
      name: 'englishTitleAsc',
      by: [
        {field: 'title.en', direction: 'asc'}
      ]
    }
  ],
};
