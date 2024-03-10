import sanityClient from './sanityClient';
import { PortableText } from '@portabletext/react';
import styles from './styles/Home.module.css';
import {
  portableTextComponents,
  SanityImage,
} from './utils/portableTextComponents';
import { FrontBlockRightImage } from './components/FrontBlockRightImage';
import { FrontBlockBackgroundImage } from './components/FrontBlockBackgroundImage';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { Hero } from './components/Hero';
import { YoutubeEmbed } from './components/YoutubeEmbed';

export default async function Home() {
  const frontpageContent = await sanityClient.fetch(`
  *[_type == "frontpage"][0]
  `);
  return (
    <>
      <main className={styles.main}>
        <Hero />
        {frontpageContent.frontpagelements.map(
          (element: any, key: number) => {
            if (element.displaytype === 'imageRight') {
              return (
                <FrontBlockRightImage key={key}>
                  <div className="left-content">
                    <h2>{element.title}</h2>
                    <PortableText
                      value={element.content}
                      components={portableTextComponents}
                    />
                  </div>
                  <SanityImage
                    value={element.photo}
                    alt={element.photo?.alt || ''}
                    className="right-content"
                  />
                </FrontBlockRightImage>
              );
            }
            if (element.displaytype === 'backgroundImage') {
              return (
                <FrontBlockBackgroundImage
                  key={key}
                  backgroundImage={element.photo}
                >
                  <div className="left-content">
                    <h2>{element.title}</h2>
                    <PortableText
                      value={element.content}
                      components={portableTextComponents}
                    />
                  </div>
                </FrontBlockBackgroundImage>
              );
            }
            if (element.displaytype === 'youtubeRight') {
              return (
                <FrontBlockRightImage key={key}>
                  <div className="left-content">
                    <h2>{element.title}</h2>
                    <PortableText
                      value={element.content}
                      components={portableTextComponents}
                    />
                  </div>

                  <div className="right-content">
                    <YoutubeEmbed embedId={element.youtubeID} />
                  </div>
                </FrontBlockRightImage>
              );
            }
            return <></>;
          }
        )}
      </main>
    </>
  );
}

export const revalidate = 60;
