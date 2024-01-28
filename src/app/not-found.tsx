import Link from 'next/link'
export default function NotFound() {
    return (
      <>
        <div className={`document-wrapper`}>
          <main className="main-content">
            <h1>Ooops... denne sida finnes visst ikke.</h1>
            <p>Om ikke annet, her har du en hest som moonwalk-er.</p>
            <p><Link href="/">Trykk her</Link> for å gå tilbake til partnersidene.</p>
            <img src="/pony.webp" alt="pony" />
          </main>
        </div>
      </>
    );
  }