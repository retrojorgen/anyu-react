// schemas/settings.js
export default {
  name: 'settings',
  type: 'document',
  title: 'Innstillinger',
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      title: 'Tittel på nettsiden',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slagord',
      name: 'tagline',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Telefonnummer',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'e-postadresse',
      name: 'email',
      type: 'string',
    },
    {
      title: 'google-kartlenke',
      name: 'googlemapsLink',
      type: 'string',
    },
    {
      title: 'Adresse',
      name: 'address',
      type: 'object',
      fields: [
        {title: 'Gateadresse', name: 'street', type: 'string'},
        {title: 'Postnummer', name: 'postalCode', type: 'string'},
        {title: 'Poststed', name: 'city', type: 'string'},
        {title: 'Region', name: 'region', type: 'string'},
        {title: 'Land', name: 'country', type: 'string'},
      ],
    },
    {
      title: 'Åpningstider',
      name: 'openingHours',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Åpningstid',
          fields: [
            {name: 'day', type: 'string', title: 'Dag'},
            {name: 'from', type: 'string', title: 'Fra'},
            {name: 'to', type: 'string', title: 'Til'},
          ],
        },
      ],
    },

    {
      title: 'Toppmeny',
      name: 'menu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Menypunkt',
          fields: [
            {title: 'Tittel i meny', name: 'title', type: 'string'},
            {
              title: 'Side',
              name: 'page',
              type: 'reference',
              to: [{type: 'page'}],
            },
            {
              title: 'Lenketype',
              name: 'type',
              type: 'string',
              options: {
                list: [
                  {title: 'Vanlig', value: 'regular'},
                  {title: 'Knapp', value: 'button'},
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
