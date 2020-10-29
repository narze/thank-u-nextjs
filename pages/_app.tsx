import React from 'react'
import Head from 'next/head'
import '../styles/base.css'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { GlobalStyles } from 'twin.macro'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>
          Create Next App - with TypeScript, ESLint, Jest, TailwindCSS, Emotion
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
