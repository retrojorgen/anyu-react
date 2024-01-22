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
              {type: 'block'},
              {type: 'image', fields: [{ type: 'text', name: 'alt', title: 'Alternative text', description: ``}]},
              { type: 'youtube' },
            ]
      }
    ]
  }