// schemas/partner.js
export default {
    name: 'page',
    type: 'document',
      title: 'Sider',
    preview: {
      select: {
        title: 'title',
        subtitle: 'slug.current'
      }
    },
    fields: [
      {
        name: 'slug',
        type: 'slug',
        title: 'url til innholdet',
        description: "adresse til innholdet (unik)"
      },
      {
        name: 'title',
        type: 'string',
        title: 'Sidetittel',
        description: "Vises i nettleserens tittelbar og i søkeresultater"

      },
      {
        title: 'Tekst',
        name: 'content',
        type: 'array',
        of: [
          {
            type: 'block', styles: [{ title: 'Overskrift', value: 'h2' },{ title: 'Under-overskrift', value: 'h3' }, { title: 'Normaltekst', value: 'normal' }],
            marks: {
              annotations: [
{
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    title: 'URL',
                    name: 'url',
                    type: 'url',
                    validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) =>
                    Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                  },
                ],

              },
              ],
            },
          },
              {type: 'image', fields: [{ type: 'text', name: 'alt', title: 'Alternative text', description: ``}]},
          { type: 'youtube' },
                      {type: 'quotation'},
            ]
      }
    ]
  }