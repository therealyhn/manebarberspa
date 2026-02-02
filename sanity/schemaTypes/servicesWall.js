import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesWall',
  title: 'Usluge',
  type: 'document',
  fields: [
    defineField({
      name: 'services',
      title: 'Usluge',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'service',
          title: 'Usluga',
          description: 'npr. Klasik, Brada, Nularica',
          fields: [
            defineField({
              name: 'name',
              title: 'Naziv',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Cena',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Sisanje', value: 'Sisanje' },
                  { title: 'Brada', value: 'Brada' },
                  { title: 'Ostalo', value: 'Ostalo' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Slika',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'category',
              media: 'image',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(7).max(7),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Services Wall' }
    },
  },
})
