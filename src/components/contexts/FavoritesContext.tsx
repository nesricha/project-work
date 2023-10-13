import { Product } from "@/types/Product";
// se non compare usecontext nei suggerimenti scrivilo a mano ma non usare usehtmlcontext
// quando importi createcontext assicurati ceh sia importato da react e non vm
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"; 

// Definizione del tipo per il contesto dei preferiti
type FavsContextType = {
    favorites: Product[],
    setFavorites: Dispatch<SetStateAction<Product[]>>
}

// Creazione del contesto dei preferiti con un valore iniziale undefined perchè vuoti
const FavoritesContext = createContext<FavsContextType | undefined>(undefined)

// Funzione che permette ai componeneti di accedere al contesto dei preferiti
export function useFavoritesContext() {
    return useContext(FavoritesContext)
}

// Componente provider dei preferiti per avvolgere l'applicazione con il contesto
export function FavoritesProvider({children}: {children: ReactNode}) {

    // Inizializzazione di uno stato locale per i preferiti
    const [favorites, setFavorites] = useState<Product[]>([])

    return (
        // Fornisce il contesto dei preferiti con il valore di "favorites" e "setFavorites"
        <FavoritesContext.Provider value = {{ favorites, setFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )

}