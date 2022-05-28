import '@fontsource/inter'
import '~styles/globals.css'
// import 'flowbite'
import type { AppProps } from 'next/app'
import { PrimaryLayout } from '~components/layout/PrimaryLayout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{'Kosi Nwabueze'}</title>
      </Head>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </>
  )
}

export default MyApp
