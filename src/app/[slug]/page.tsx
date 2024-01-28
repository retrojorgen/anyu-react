/* eslint-disable @next/next/no-img-element */
/**
 * Route for showing every partner from Sanity
 * Sends users to not-found.tsx if the partner is not found
 */
import sanityClient from '../sanityClient';

import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '../utils/portableTextComponents';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: any): Promise<Metadata> {
  const { slug } = params;
  const post = await sanityClient.fetch(`
  *[_type == "page" && slug.current == "${slug}"][0]
  `);
  // If the partner is not found, send the user to not-found.tsx
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.title,
  };
}

export default async function Home({ params }: any) {
  const { slug } = params;
  // Fetches the partner from Sanity
  const post = await sanityClient.fetch(`
  *[_type == "page" && slug.current == "${slug}"][0]
  `);
  // If the partner is not found, send the user to not-found.tsx
  if (!post) notFound();

  return (
    <>
      <div className="header-wrapper">
        <main>

        </main>
      </div>
    </>
  );
}

export const revalidate = 60;
