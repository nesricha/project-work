import NavBarComponent from "@/components/global/NavBarComponent"
import ProductCardComponent from "@/components/ProductCardComponent"
import ProductInfoComponent from "@/components/ProductInfoComponent"
import { ProductInfo } from "@/types/ProductInfo"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../../../components/styles/Styles.module.css"
import FooterComponent from "@/components/global/FooterComponent"

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

    

    return <div className={`${styles.mainContainer}`}>

    <NavBarComponent />

    {product !== undefined ? <ProductInfoComponent product={product} /> : <p>Product not found</p>}

    <FooterComponent />

    </div>
}