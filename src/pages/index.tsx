import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import photo1 from '@/images/anyu-accupuncture.jpg';
import photo2 from '@/images/accupuncture-2.jpg';
import photo3 from '@/images/anyu-big-back.jpg';
import photo4 from '@/images/anyu-other-treatments.jpg';
import {FrontBlockRightImage} from '@/components/FrontBlockRightImage';
import {FrontBlocBackgroundImage} from '@/components/FrontBlocBackgroundImage';
export default function Home() {
  return (
    <>
      <Head>

        <title>Anyu klinikken, senter for helse og livsmestring i Lørenskog</title>
        <meta name="description" content="Anyu klinikken, senter for helse og livsmestring i Lørenskog" />
        <meta name="keywords" content="lørenskog, akupunktur, tuinamassasje, muskelmassasje, qigong, yoga, tankefeltterapi, rosenterapi, anyu klinikken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <FrontBlockRightImage>
          <div className="left-content">
            <h2>Velkommen til Anyu-klinikken</h2>
            <p>Anyu klinikken er en klinikk i Lørenskog som tilbyr akupunktur – IMS-, triggerpunkts- og øreakupunktur.</p>
          </div>
          <Image className="right-content" src={photo1} alt="Akupunktur" />
        </FrontBlockRightImage>
        <FrontBlocBackgroundImage backgroundImage={photo3.src}>
          <div className="left-content">
            <h2>Akupunktør Ildiko er spesialist innen smerteproblematikk og helseproblemer hos kvinner.</h2>
            <p>Akupunktur brukes for blant annet muskel og skjelettlidelser, hodepine, stress og slitenhet og plager og smerter i forbindelse med menstruasjon.</p>
          </div>

        </FrontBlocBackgroundImage>
        <FrontBlockRightImage>
          <div className="left-content">
            <h2>Gravid, eller planlegger å bli det?</h2>
            <p>Våre kunder oppsøker oss for plager i svangerskapet som kvalme og halsbrann samt fødselsforberende behandling.</p>
            <p>Akupunktur kan også benyttes for par som har problemer med å bli gravide.</p>
          </div>
          <Image className="right-content" src={photo2} alt="Akupunktur" />
        </FrontBlockRightImage>
        <FrontBlocBackgroundImage backgroundImage={photo4.src}>
          <div className="left-content">
            <h2>Sliter du med en plage? Sesongbetont?</h2>
            <p>Flere kunder oppsøker oss for plager i forbindelse med overgangsalder, sesongbetonte luftveisplager, mageproblemer, søvn, og nedstemthet.</p>
            <p>Lurer du på om vi kan hjelpe deg med din plage? Ta kontakt på tlf 40670885, eller send en melding på vår <a href="https://www.facebook.com/anyuklinikken/">facebook-side</a>.</p>
          </div>
        </FrontBlocBackgroundImage>
        <FrontBlockRightImage>
          <div className="left-content">
            <h2>Har du spørsmål rundt akupunktur eller Anyu-klinikken?</h2>
            <p>I denne korte videoen forklarer vår akupunktør Ildiko Balog om hvorfor fler og fler benytter seg av akupunktur ved smerte og andre plager.</p>
          </div>
          <iframe className="right-content" width="560" height="315" src="https://www.youtube.com/embed/jUNaTrBznDY" allow="autoplay; encrypted-media"></iframe>
        </FrontBlockRightImage>
      </main>
    </>
  )
}
