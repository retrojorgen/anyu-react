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
        {name: 'nameCreator', type: 'string', title: 'Navn på behandler'},
        {name: 'titleCreator', type: 'string', title: 'tittel på behandler'},
        {name: 'textActionButtons', type: 'string', title: 'Tekst over knapper til booking'},
        {name: 'bookingUrl', type: 'url', title: 'Booking URL'},
        {name: 'textAdditionalButtons', type: 'string', title: 'Tekst under bookingknapp'},
        {name: 'facebookBookingUrl', type: 'url', title: 'Facebook booking url'},
        {name: 'phoneNumberBooking', type: 'string', title: 'Telefonnummer til booking'},
      ],
    },
    {
      title: 'Innhold over program',
      name: 'contentAboveProgram',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alternative text', description: ``}],
        },
        {type: 'youtube'},
        {type: 'vimeo'},
        {type: 'quotation'},
      ],
    },
  ],
}
