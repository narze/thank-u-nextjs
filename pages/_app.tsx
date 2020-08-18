import Head from 'next/head'
import '../styles/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Create Next App - with TypeScript, ESLint, Jest, TailwindCSS, Emotion
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
