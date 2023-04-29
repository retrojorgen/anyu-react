import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Article.module.css'
import Hero from '@/components/Hero'
import photo1 from '@/images/order-header.jpg';
import photo4 from '@/images/ildiko-behandler.jpg';
import photo5 from '@/images/MAF-400x335.jpg';

export default function Akupunktur() {
  return (
    <>
      <Head>

        <title>Online booking og priser</title>
        <meta name="description" content="Informasjon om online booking og priser på behandling hos Anyu-klinikken i Lørenskog." />
        <meta name="keywords" content="lørenskog, akupunktur, tuinamassasje, muskelmassasje, qigong, yoga, tankefeltterapi, rosenterapi, anyu klinikken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Online booking og priser</h1>
        <img src={photo1.src} className={styles.fullimage} />
        <h2>Ønsker du å bestille time til akupunktur?</h2>
        <p>Du kan enkelt <a href="https://akuanyuklinikken.bestille.no/" target="_blank" rel="noopener">booke timer online</a> ved å <a href="https://akuanyuklinikken.bestille.no/" target="_blank" rel="noopener">følge denne lenken</a>.</p>
        <p>Du kan også booke time ved å ringe <strong>406 70 885</strong>, eller sende e-post til <a href="mailto:post@anyu.no" target="_blank" rel="noopener">post@anyu.no</a> .</p>

        <h2>Priser for behandling:</h2>
        <h3>Akupuntur:</h3>
        <ul>
          <li>Første gang:  kr 1000,-</li>
          <li>Oppfølging: kr 600,-</li>
          <li>Akupunktur med kopping: kr 680,-</li>
          <li>Øreakupunktur: kr 400,-</li>
          <li>Kopping 20 minutter: Kr 600,-</li>
        </ul>
        <h3>Pakker:</h3>
        <ul>
          <li>5 behandlinger for kr 2800,- (spar 600,- nye kunder)</li>
          <li>10 behandlinger kr 5500,- (spar 900,- nye kunder)</li>
        </ul>
          <p>* For akupunktur med kopping gjelder egne priser: Kr 3200,- for pakke 5 behandlinger og kr 6300,- for 10 behandlinger</p>
          <p>* Alle avtaler gjennomføres innenfor en periode på ett år etter første behandling. Tilbudet betales på forskudd.</p>
        <video controls>
          <source src="/gavekort.mp4" type="video/mp4" />
        </video>  
        <h3>Gavekort:</h3>  
        <p>Det er enkelt å bestille gavekort fra oss. Bare send sms til <a href="tel:40670885" target="_blank" rel="noopener">40670885</a> eller e-post til <a href="mailto:post@anyu.no" target="_blank" rel="noopener">:post@anyu.no</a> med pris, navn og adresse, så sender vi gavekort i posten eller elektronisk.</p>
        <p>* Bestilte timer som ikke blir benyttet eller avbestilt innen 24 timer yrkesdagen før, må betales i sin helhet.</p>
      </main>
    </>
  )
}
