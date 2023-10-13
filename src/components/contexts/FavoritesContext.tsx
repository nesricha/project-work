import { Product } from "@/types/Product";
// se non compare usecontext nei suggerimenti scrivilo a mano ma non usare usehtmlcontext
// quando importi createcontext assicurati ceh sia importato da react e non vm
import { ReactNode, createContext, useContext, useState } from "react"; 

const FavoritesContext = createContext({})

export function useFavoritesContext() {
    return useContext(FavoritesContext)
}

export function FavoritesProvider({children}: {children: ReactNode}) {

    const [favorites, setFavorites] = useState<Product[]>([])

    return (
        <FavoritesContext.Provider value = {{ favorites, setFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )

}