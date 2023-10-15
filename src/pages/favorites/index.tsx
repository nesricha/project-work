import CardListComponent from "@/components/CardListComponent";
import { FavoritesProvider, useFavoritesContext } from "@/components/contexts/FavoritesContext";
import ArrowTopComponent from "@/components/global/ArrowTopComponent";
import CategoryComponent from "@/components/global/CategoryComponent";
import ContactFormComponent from "@/components/global/ContactFormComponent";
import FooterComponent from "@/components/global/FooterComponent";
import NavBarComponent from "@/components/global/NavBarComponent";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

export default function FavoritesPage() {

    const favoritesContext = useFavoritesContext()

    if (!favoritesContext) {

        return (<div className="text-dark-2 bg-light-1 font-raleway">

            <NavBarComponent />
            <CategoryComponent />

            <p className="text-3xl text-center font-bold p-8">"favoritesContext" is undefined</p>

            <ContactFormComponent />
            <FooterComponent />
            <ArrowTopComponent />

        </div>)
    }



    const { favorites, addToFavs } = favoritesContext

    const [uniqueFavorites, setUniqueFavorites] = useState<Product[]>([]);

    useEffect(() => {
        const uniqueFavoritesSet = new Set(favorites);
        const uniqueFavoritesArray = Array.from(uniqueFavoritesSet);
        setUniqueFavorites(uniqueFavoritesArray);

        console.log(uniqueFavoritesArray);
    }, [favorites]);

    return (<div className="text-dark-2 bg-light-1 font-raleway">

        <NavBarComponent />
        <CategoryComponent />

        {uniqueFavorites !== undefined && uniqueFavorites.length ? (<div className="shadow-md">
            <h2>Your WishList</h2>

            <CardListComponent products={uniqueFavorites} />

        </div>) : (<p className="text-3xl text-center font-bold p-8">No product has been added to the wishlist yet.</p>)
        }

        <ContactFormComponent />
        <FooterComponent />
        <ArrowTopComponent />

    </div>)
}