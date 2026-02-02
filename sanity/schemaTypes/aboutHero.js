import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutHero',
  title: 'O meni',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Pozadinska slika',
      type: 'image',
      options: { hotspot: true },
      description: 'Najbolja rezolucija 16:9 (1920x1080)',
    }),
    defineField({
      name: 'heading',
      title: 'Naslov',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraphOne',
      title: 'Prvi paragraf',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'paragraphTwo',
      title: 'Drugi paragraf',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'statOneValue',
      title: 'Statistika 1',
      type: 'string',
    }),
    defineField({
      name: 'statOneLabel',
      title: 'Statistika 1 naziv',
      type: 'string',
    }),
    defineField({
      name: 'statTwoValue',
      title: 'Statistika 2',
      type: 'string',
    }),
    defineField({
      name: 'statTwoLabel',
      title: 'Statistika 2 naziv',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Hero' }
    },
  },
})
