'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
export const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <>
    <LiteYouTubeEmbed id={embedId} title="Anyu video" />
  </>
);