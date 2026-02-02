import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Home Sekcija',
  type: 'document',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slajdovi',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slajd',
          fields: [
            defineField({
              name: 'eyebrow',
              title: 'Mali naslov (na vrhu)',
              type: 'string',
            }),
            defineField({
              name: 'heading',
              title: 'Veliki naslov',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subheading',
              title: 'Srednji naslov',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Opis',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Slika',
              type: 'image',
              options: { hotspot: true },
              description: 'Najbolje stavljaj slike u 16:9 formatu (1920x1080)',
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'eyebrow',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Hero',
      }
    },
  },
})
