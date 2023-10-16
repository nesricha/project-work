import { Product } from "@/types/Product";
// se non compare usecontext nei suggerimenti scrivilo a mano ma non usare usehtmlcontext
// quando importi createcontext assicurati ceh sia importato da react e non vm
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext<{
    favorites: Product[],
    addToFavs(product: Product): void
}>({
    favorites: [],
    addToFavs(product) { }
})


export const useFavoritesContext = () => useContext(FavoritesContext)




export const FavoritesProvider = ({ children }: { children: ReactNode }) => {

    const [favorites, setFavorites] = useState<Product[]>([])

    // useEffect(() =>{
    //     let key: any = localStorage.getItem(`favorites`)
    //     try {
    //     const favsData = JSON.parse(key)
    //      favsData && setFavorites(favsData)
    //     } catch {
    //         console.log("Error reading localStorage key")
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("favorites", JSON.stringify(favorites))
    // }, [favorites])

    const addToFavs = (newProduct: Product) => {
        console.log("Adding to favorites: ", newProduct)
        setFavorites(prevFav => [...prevFav, newProduct]);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavs }} >
            {children}
        </FavoritesContext.Provider>
    )

}