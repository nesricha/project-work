import { FavoritesProvider } from '@/components/contexts/FavoritesContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<FavoritesProvider>

    <Component {...pageProps} />

  </FavoritesProvider>)
}
