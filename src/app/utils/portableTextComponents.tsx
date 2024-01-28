// Barebones lazy-loaded image component
import sanityClient from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import getYouTubeId from 'get-youtube-id';
import { getImageDimensions } from '@sanity/asset-utils';

export const getSanityImageUrl = (SanityImageObject: any) => {
  const imageBuilder = imageUrlBuilder(sanityClient);
  const image = imageBuilder.image(SanityImageObject);
  return image.fit('max').auto('format').width(1000).url();
}

export const SanityImage = ({ value, alt, className }: { value: any; alt?: string, className?: string}) => {
  const imageBuilder = imageUrlBuilder(sanityClient);
  const image = imageBuilder.image(value);
  return (
    <img
      className={`image ${className || ''}`}
      src={image.fit('max').auto('format').width(1000).url()}
      alt={alt || ' '}

      loading="lazy"
    />
  );
};

const youtube = ({ value } : {value: any}) => {
  const id = getYouTubeId(value.url);
  return (
    <div>
      <iframe
        width="560"
        height="400"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const quotation = ({ value: { quote, author } }: { value: {quote: string, author: string} }) => {
  return (
    <div>
      <figure className="blockquote-container">
        <blockquote className="blockquote-quote">
          «<span>{quote}</span>»
        </blockquote>
        {author && (
          <figcaption className="blockquote-author">
            {author}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export const portableTextComponents = {
  types: {
    image: SanityImage,
    youtube: youtube,
    quotation: quotation,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};
