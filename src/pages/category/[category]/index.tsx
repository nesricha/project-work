import CategoryComponent from "@/components/global/CategoryComponent"
import CardListComponent from "@/components/CardListComponent"
import ContactFormComponent from "@/components/global/ContactFormComponent"
import NavBarComponent from "@/components/global/NavBarComponent"
import { Product } from "@/types/Product"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import FooterComponent from "@/components/global/FooterComponent"
import ArrowTopComponent from "@/components/global/ArrowTopComponent"
import { FavoritesProvider } from "@/components/contexts/FavoritesContext"

export default function CategoryPage() {

    const router = useRouter()
    const productsCategory = router.query.category as string; // Use type assertion to ensure it's a string

    const [products, setProducts] = useState<Product[]>()

    useEffect(() => {
        if (productsCategory !== undefined)
            axios.get(`https://dummyjson.com/products/category/${productsCategory.toLowerCase()}`)
                .then(res => setProducts(res.data.products))
                .catch(err => console.log(err))
    }, [productsCategory])



    return (<FavoritesProvider>

        <div className="text-dark-2 bg-light-1 font-raleway">

            <NavBarComponent />

            <CategoryComponent />

            {products !== undefined && products.length ? <div className="shadow-md">

                <h2 className="font-semibold text-3xl md:text-4xl p-10" >{`Category: ${productsCategory?.replace("-", " ").toUpperCase()}`}</h2>

                <CardListComponent products={products} />

            </div> : <p className="text-3xl text-center font-bold p-8">{`No products available for the category "${productsCategory?.toLowerCase()}"`}</p>}

            <ContactFormComponent />

            <FooterComponent />

            <ArrowTopComponent />

        </div>

    </FavoritesProvider>)
}