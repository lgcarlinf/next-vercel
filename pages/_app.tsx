import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
