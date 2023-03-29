import Layout from '@/components/layout'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  )
}
