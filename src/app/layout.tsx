import '@/styles/globals.css'
import '@/styles/header.css'
import '@/styles/restrain.css'
import '@/styles/hero.css'
import '@/styles/footer.css'
export const metadata = {
  title: 'Anyu Klinikken',
  author: 'Ildiko Balog',
  description: 'Anyu klinikken, senter for helse og livsmestring i Lørenskog',
  keywords: 'lørenskog, akupunktur, tuinamassasje, muskelmassasje, qigong, yoga, tankefeltterapi, rosenterapi, anyu klinikken',
};


import { Header } from './components/Header'
import { Footer } from './components/Footer'
import FooterScripts from './components/CustomScripts'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <>
            <Header />
            <div className="page-wrapper">{children}</div>
            {/* @ts-expect-error Server Component */}
            <Footer />
            <FooterScripts />
          </>
      </body>
    </html>
  );
}

export const revalidate = 30;
