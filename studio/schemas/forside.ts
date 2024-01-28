// schemas/partner.js
export default {
  name: 'frontpage',
  type: 'document',
  title: 'Forside',
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      title: 'Hero innhold',
      name: 'heroContent',
      type: 'object',
      fields: [
        {name: 'photoCreator', type: 'image', title: 'Bilde av behandler'},
        {name: 'nameCreator', type: 'string', title: 'Navn på behandler'},
        {name: 'titleCreator', type: 'string', title: 'tittel på behandler'},
        {name: 'textActionButtons', type: 'string', title: 'Tekst over knapper til booking'},
        {name: 'bookingUrl', type: 'url', title: 'Booking URL'},
        {name: 'bookingButtonName', type: 'string', title: 'Booking-knapp tittel'},
        {name: 'textAdditionalButtons', type: 'string', title: 'Tekst under bookingknapp'},
        {name: 'facebookBookingUrl', type: 'url', title: 'Facebook booking url'},
        {name: 'facebookButtonText', type: 'string', title: 'Facebook booking knapp tittel'},
        {name: 'phoneNumberBooking', type: 'string', title: 'Telefonnummer til booking'},
        {
          name: 'phoneNumberBookingText',
          type: 'string',
          title: 'Tekst til telefonnummer booking-knapp',
        },
      ],
    },
    {
      title: 'Forsideelementer',
      name: 'frontpagelements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Velg type',
              name: 'displaytype',
              type: 'string',
              options: {
                list: [
                  {title: 'Høyrestilt bilde', value: 'imageRight'},
                  {title: 'Bakgrunnsbilde', value: 'backgroundImage'},
                  {title: 'Venstrestilt bilde', value: 'imageLeft'},
                  {title: 'Høyrestilt Youtube', value: 'youtubeRight'},
                ], // <-- predefined values
              },
            },
            {name: 'title', type: 'string', title: 'Tittel'},
            {
              name: 'photo',
              type: 'image',
              title: 'Bilde',
              hidden: ({parent}: {parent: {displaytype: string}}) =>
                parent.displaytype === 'youtubeRight',
            },
            {
              name: 'youtubeID',
              type: 'string',
              title: 'YouTube video ID',
              hidden: ({parent}: {parent: {displaytype: string}}) =>
                parent.displaytype !== 'youtubeRight',
            },
            {
              title: 'Tekst',
              name: 'content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
