// from https://www.sanity.io/schemas/rich-quotations-in-portable-text-31a8aecf

const Preview = (props : any) => {
    const {quote, author, renderDefault} = props
    return (
      <div>
        {/* 👇 Renders the default preview UI */}
        {renderDefault({...props, title: 'Sitat'})}
        {/* 👇 Renders the video preview below */}
        <figure>
          <blockquote>
            {quote}
          </blockquote>
          {author && <figcaption>{author}</figcaption>}
        </figure>
      </div>
    )
  }

export default {
    name: 'quotation',
    type: 'object',
    title: 'Sitat',
    fields: [
      {
        name: 'quote',
        type: 'string',
        title: 'Sitat'
      },
      {
        name: 'author',
        type: 'string',
        title: 'Forfatter',
      },
      
    ],
    preview: {
        select: {
            quote: 'quote',
            author: 'author',
        },
    },
    components: {
        preview: Preview,
    },
  }