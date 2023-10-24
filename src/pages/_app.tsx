import { CartProvider } from "@/components/contexts/CartContext";
import { FavoritesProvider } from "@/components/contexts/FavoritesContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StrictMode } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>   {/* strict mode è opzionale, è uno strumento che serve ad evidenziare potenziali bug nel codice, aiuta a dare dei feedback in più in caso di errori */}
      <FavoritesProvider>  {/* questo è il provider che ingloba tutto(in questo caso, perchè l'ho messo qui) */}
        <CartProvider>
          <Component {...pageProps} /> {/* qui ci sono tutti i componenti e le pagine del progetto */}
        </CartProvider>
      </FavoritesProvider>
    </StrictMode>
  );
}
