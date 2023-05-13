import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Article.module.css'
import Hero from '@/components/Hero'
import photo4 from '@/images/ildiko-behandler.webp';
import photo5 from '@/images/MAF-400x335.webp';

export default function Akupunktur() {
  return (
    <>
      <Head>

        <title>Om Anyu-klinikken - Anyu klinikken, senter for helse og livsmestring i Lørenskog</title>
        <meta name="description" content="Praktisk informasjon om Anyu-klinikken i Lørenskog." />
        <meta name="keywords" content="lørenskog, akupunktur, tuinamassasje, muskelmassasje, qigong, yoga, tankefeltterapi, rosenterapi, anyu klinikken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.backdrop} />
      <blockquote>«Livskraft i flyt og balanse gir god fysisk og mental helse.»</blockquote>
        <h1>Om Anyu-klinikken</h1>
        
        <p>Anyu klinikken vokste ut av drømmen til akupunktør Ildiko Balog. Visjonen er å tilby ulike løsninger som hjelper deg å finne ut av både fysiske problemer og mentale belastninger.</p>
        <p>Ring oss på tlf: 406 70 885, eller send mail til&nbsp;<a aria-label="anyu e-post" href="mailto:post@anyu.no" target="_blank" rel="noopener">post@anyu.no</a></p>
        <h2>Vår behandler</h2>
        <img src={photo4.src} className={styles.fullimage} />
        <h3>Ildiko Balog</h3>
        <p>TLF: <a aria-label="telefonnummer" href="tel:40670885">40670885</a></p>
        <p>   Anyu klinikken vokste ut av drømmen til akupunktør Ildiko Balog. Visjonen er å tilby ulike løsninger som hjelper deg å finne ut av både fysiske problemer og mentale belastninger. Jeg er her for deg.</p>
        <h3>Prøv min avspennings-lydfil:</h3>
        <p>Finn en god posisjon enten sittende eller liggende og følg instruksjonene og kjenn hvordan du slapper av. Bare send meg en melding eller e-post, så sender jeg deg lydfilen.</p>
      </main>
    </>
  )
}
