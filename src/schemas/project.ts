import { BulbOutlineIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  icon: BulbOutlineIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'youtube' }],
    }),
    defineField({
      name: 'link',
      title: 'Project URL',
      type: 'string',
    }),
    defineField({
      name: 'gitHubRepo',
      title: 'Github Repo',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Tech Stack',
      name: 'techStack',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'ReactJS', value: 'react' },
          { title: 'NodeJS', value: 'nodejs' },
          { title: 'NextJS', value: 'nextjs' },
          { title: 'Sanity.io', value: 'sanity' },
          { title: 'Ruby on Rails', value: 'rails' },
          { title: 'React Native', value: 'react-native' },
          { title: 'Strapi', value: 'strapi' },
          { title: 'GraphQL', value: 'graphql' },
        ],
      },
    }),
  ],
});
