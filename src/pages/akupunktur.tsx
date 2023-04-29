import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Article.module.css'
import Hero from '@/components/Hero'
import photo1 from '@/images/accupuncture-1.jpg';
import photo2 from '@/images/accupuncture-2.jpg';
import photo3 from '@/images/kopping.jpg';
import photo4 from '@/images/ildiko-behandler.jpg';
import photo5 from '@/images/MAF-400x335.jpg';

export default function Akupunktur() {
  return (
    <>
      <Head>

        <title>Akupunktur - Anyu klinikken, senter for helse og livsmestring i lørenskog</title>
        <meta name="description" content="Informasjon om akupunkturbehandling ved Anyu-klinikken. Behandling ved akupuntør Ildiko Balog." />
        <meta name="keywords" content="lørenskog, akupunktur, tuinamassasje, muskelmassasje, qigong, yoga, tankefeltterapi, rosenterapi, anyu klinikken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1>Akupunktur</h1>
        <img src={photo1.src} className={styles.fullimage} />
        
        <h2>Om behandlingen:</h2>
        <p>Under første akupunkturbehandling blir det foretatt et grundig intervju som gir akupunktøren et grunnlag for å stille diagnose. De opplysningene som kommer frem blir ført i en elekstronisk journal. Som medlem av Akupunkturforeningen plikter akupunktøren å behandle helse- og personopplysninger på en forsvarlig måte og i overensstemmelse med gjeldende lover og forskrifter. Under intervjuet stilles det spørsmål om plager og symptomer. Akupunktøren er interessert i hvor lenge du har hatt plagene, hva som forverrer eller lindrer dem, osv. I tillegg ser akupunktøren på tungen og tar pulsen.</p>
        <h2>Lurer du på noe om akupunkturnåler? Vår behandler Ildiko forklarer hvordan de fungerer i denne videoen</h2>
        <p><iframe src="https://www.youtube.com/embed/oM24TmiYiMk" width="560" height="315"></iframe></p>
        <h2>Hva er akupunktur:</h2>
        <p>Spør du akupunktøren om hvorfor akupunktur virker, kan hun enten velge å svare utfra tradisjonell kinesisk medisinsk (TKM) teori, eller hun kan velge å svare utfra et biomedisinsk perspektiv.<br />
        Vår akupunktør utøver både klassisk akupunktur, intramuskulær stimulering, triggerpunktsbehandling og øreakupunktur.</p>
        <img src={photo2.src} className={styles.fullimage} />
        <h2>Plager akupunktøren jobber med:</h2>
        <ul>
          <li>Muskel og skjelettlidelser</li>
          <li>Hodepine</li>
          <li>Stress og slitenhet</li>
          <li>Plager og smerter i forbindelse med menstruasjon, problemer med å bli gravid, plager i forbindelse med overgangsalder</li>
          <li>Plager i svangerskapet som kvalme, halsbrann, lidelser i bekken o.l.</li>
          <li>Fødselsforberedende behandling</li>
          <li>Luftveislidelser av ulik art, som sesongbetonte luftveisproblemer</li>
          <li>Urinveislidelser</li>
          <li>Mageproblemer</li>
          <li>Problemer med søvn, frykt, nedstemthet</li>
        </ul>
        <h2>Øreakupunktur:</h2>
        <p>Øreakupunktur er et tilbud til deg som ikke har tid til å ligge på benken, men trenger en rask behandling. Dessuten er den rimeligere enn klassisk akupunktur. Øreakupunktur brukes ofte for å hjelpe til ved røykeslutt. Men det kan brukes mot smerter, nedstemthet/ angst, som en støtte i vektnedgang og ved andre tilstander.<br />
        Du får bitte små nåler eller magneter som plastres fast i punkter i øret, som sitter på i alt fra 3 til 5 dager.</p>
        <img src={photo3.src} className={styles.fullimage} />
        <h2>Kopping:</h2>
        <p>Kopping er en form for vakum-massasje som kan gi økt blodsirkulasjonen, som igjen bidrar til å transportere bort slaggstoffer.<br />
        Kopping gir økt velvære og kan brukes ved muskelspenninger, kan også brukes i cellulittbehandling.</p>
        <p>Kopping er brukt i mange gamle kulturer. Det blir brukt både  mot f.eks. forkjølelser og hudlidelser, men også ødemer og smerter.</p>
        <p>Her på klinikken brukes koppingen først og fremst som behandling mot muskel og skjelettplager, som regel sammen med akupunktur. Både spent muskulatur, men også muskulatur med for mye melkesyre kan avhjelpes med kopping.</p>
        <p>PS: Vi driver ikke med blod-kopping.</p>
        <h2>Vår behandler</h2>
        <img src={photo4.src} className={styles.fullimage} />
        <h3>Ildiko Balog</h3>
        <p>Ildiko er gründer og daglig leder på klinikken.<br />
        Hun har femårig utdannelse fra Akupunkturhøyskolen (nå: NHCK – Norges Helsehøyskole Campus Kristiania). Denne gir Bachelorgrad i akupunktur og inkluderer også utdannelse i vestlig medisin på nivået grunnfag+mellomfag i nevrologi.<br />
        Ildiko har spesialisert seg innen smerteproblematikk og kvinnehelse. Hun har lang erfaring i å lindre ulike former for smerter, det være seg muskel/skjelettlidelser eller ulike former for hodepine. Hun har også hatt mange kvinner innom for hormonforstyrrelser, menstruasjonssmerter, plager i forbindelse med svangerskap, plager i forbindelse med overgangsalder og mye mer.</p>
        <p>Ildiko har jobbet på tverrfaglig klinikk siden 2008. I tillegg har hun har spesialkurs i barneakupunktur, svangerskaps-akupunktur og smertebehandling.<br />
        I tillegg er hun instruktør i qigong siden 2009.</p>
        <p>Ildiko er medlem av Akupunkturforeningen<br />
        Dersom du tilhører en annen del av landet og ønsker å søke etter akupunktør med riktig utdannelse, gå inn på foreningens hjemmeside <a href="http://www.akupunktur.no">www.akupunktur.no</a> og finn din akupunktør.<br />
        </p>
        <img src={photo5.src} className={styles.smallimage} />
        <p>Bestill time på tlf 40670885, send mail til <a href="mailto:post@anyu.no" target="_blank" rel="noopener">post@anyu.no</a> eller bestill time via <a href="https://akuanyuklinikken.bestille.no/">online-booking</a>.</p>
      </main>
    </>
  )
}
