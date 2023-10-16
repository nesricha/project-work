import { FavoritesProvider } from '@/components/contexts/FavoritesContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (<StrictMode>
    <FavoritesProvider>

      <Component {...pageProps} />

    </FavoritesProvider>
  </StrictMode>)
}
