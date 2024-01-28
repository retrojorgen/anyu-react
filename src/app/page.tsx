import sanityClient from './sanityClient';
import { PortableText } from '@portabletext/react';
import styles from '@/styles/Home.module.css';
import {
  portableTextComponents,
  SanityImage,
} from './utils/portableTextComponents';

import { Hero } from './components/Hero';

export default async function Home() {
  const frontpageContent = await sanityClient.fetch(`
  *[_type == "frontpage"][0]
  `);
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}

export const revalidate = 60;
