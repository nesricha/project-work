import { Product } from "@/types/Product";
// se non compare usecontext nei suggerimenti scrivilo a mano ma non usare usehtmlcontext
// quando importi createcontext assicurati ceh sia importato da react e non vm
import { ReactNode, createContext, useContext, useState } from "react";

// Definizione del tipo per il contesto dei preferiti
// type FavsContextType = {
//     favorites: Product[],
//     addToFavs(product: Product): void
// }

// Creazione del contesto dei preferiti con un valore iniziale undefined perchè vuoti
const FavoritesContext = createContext<{
    favorites: Product[],
    addToFavs(product: Product): void
}>({
    favorites: [],
    addToFavs(product) { }
})

// Funzione che permette ai componeneti di accedere al contesto di favorites
export const useFavoritesContext = () => useContext(FavoritesContext)

// Componente provider dei preferiti per avvolgere l'applicazione con il contesto
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {

    const [favorites, setFavorites] = useState<Product[]>([])

    const addToFavs = (product: Product) => {
        console.log("Adding to favorites: ", product)
        setFavorites(favorites => [...favorites, product]);
    }

    return (
        // Fornisce il contesto con il valore di "favorites" e "setFavorites" ai componenti children
        <FavoritesContext.Provider value={{ favorites, addToFavs }} >
            {children}
        </FavoritesContext.Provider>
    )

}