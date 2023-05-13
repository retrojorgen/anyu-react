import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '@/components/Header'
import { ContentRestrain } from '@/components/ContentRestrain'
import { Footer } from '@/components/Footer'
import FooterScripts from '@/components/CustomScripts'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Ildiko Balog" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <link rel="apple-touch-icon" href="/apple-icon-touch.png" />
        <link rel="icon" href="/favicon.png" />
        <meta name="msapplication-TileColor" content="#f01d4f" />
        <meta name="msapplication-TileImage" content="/apple-icon-touch.png" />
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
        <FooterScripts />
        <NextScript />
      </body>
    </Html>
  )
}
