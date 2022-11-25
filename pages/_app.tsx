import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context/ContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    )
}

export default MyApp
