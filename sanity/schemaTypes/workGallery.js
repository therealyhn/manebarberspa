import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workGallery',
  title: 'Galerija',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Galerija',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryItem',
          title: 'Galerija',
          fields: [
            defineField({
              name: 'title',
              title: 'Naslov',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Slika',
              type: 'image',
              options: { hotspot: true },
              description: 'Bila koja rezolucija'
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Work Gallery' }
    },
  },
})
