import CardListComponent from "@/components/CardListComponent";
import { FavoritesProvider } from "@/components/contexts/FavoritesContext";
import ArrowTopComponent from "@/components/global/ArrowTopComponent";
import CategoryComponent from "@/components/global/CategoryComponent";
import ContactFormComponent from "@/components/global/ContactFormComponent";
import FooterComponent from "@/components/global/FooterComponent";
import NavBarComponent from "@/components/global/NavBarComponent";
import { Product } from "@/types/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchResultComponent() {

    const router = useRouter()
    const searchQuery = router.query.sQuery as string
    const [products, setProducts] = useState<Product[]>()

    useEffect(() => {
        if (searchQuery !== undefined)
            axios.get(`https://dummyjson.com/products/search?q=${searchQuery.toLowerCase()}`)
                .then(res => setProducts(res.data.products.filter((product: Product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))))
                .catch(err => console.log(err));
    }, [searchQuery])

    return <div className="text-dark-2 bg-light-1 font-raleway">

            <NavBarComponent />

            <CategoryComponent />

            {products !== undefined && products.length ? <div className="shadow-md">

                <h2 className="font-semibold text-3xl md:text-4xl p-10" >{` Results for '${searchQuery.toUpperCase()}' `}</h2>

                <CardListComponent products={products} />

            </div> : <p className="text-3xl text-center font-bold p-8">{` No products were found for '${searchQuery?.toLowerCase()}' `}</p>}

            <ContactFormComponent />

            <FooterComponent />

            <ArrowTopComponent />

        </div>
}