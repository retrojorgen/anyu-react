// from https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block

// youtube.js
import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props : any) => {
    const {url, renderDefault} = props
    if (!url) {
      return <div>Missing YouTube URL</div>
    }
    const id = getYouTubeId(url)
    return (
      <div>
        {/* 👇 Renders the default preview UI */}
        {renderDefault({...props, title: 'YouTube Embed'})}
        {/* 👇 Renders the video preview below */}
        <LiteYouTubeEmbed title="" id={id ?? ""} />
      </div>
    )
  }

export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube video URL'
      }
      
    ],
    preview: {
        select: {
            url: 'url',
        },
    },
    components: {
        preview: Preview,
    },
  }