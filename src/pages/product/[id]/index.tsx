import NavBarComponent from "@/components/global/NavBarComponent"
import ProductInfoComponent from "@/components/ProductInfoComponent"
import { ProductInfo } from "@/types/ProductInfo"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import FooterComponent from "@/components/global/FooterComponent"
import ContactFormComponent from "@/components/global/ContactFormComponent"
import ArrowTopComponent from "@/components/global/ArrowTopComponent"
import { FavoritesProvider } from "@/components/contexts/FavoritesContext"

export default function ProductPage() {

    const router = useRouter()
    const productId = router.query.id

    const [product, setProduct] = useState<ProductInfo>()

    useEffect(() => {
        if (productId !== undefined)
            axios.get(`https://dummyjson.com/products/${productId}`)
                .then(res => setProduct(res.data))
                .catch(err => console.log(err))
    }, [productId])



    return <div className="text-dark-2 bg-light-1 font-raleway">

            <NavBarComponent />

            {product !== undefined ? <ProductInfoComponent product={product} /> : <p className="text-3xl text-center font-bold p-8">We're sorry, the product you're looking for is not available. </p>}

            <ContactFormComponent />

            <FooterComponent />

            <ArrowTopComponent />

        </div>
}