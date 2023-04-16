import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '@/components/Header'
import { ContentRestrain } from '@/components/ContentRestrain'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
          <Main />
        <NextScript />
      </body>
    </Html>
  )
}
