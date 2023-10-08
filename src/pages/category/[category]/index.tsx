import CategoryComponent from "@/components/global/CategoryComponent"
import CategoryListComponent from "@/components/CategoryListComponent"
import ContactFormComponent from "@/components/global/ContactFormComponent"
import NavBarComponent from "@/components/global/NavBarComponent"
import { Product } from "@/types/Product"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../../../components/styles/Styles.module.css"
import FooterComponent from "@/components/global/FooterComponent"

export default function CategoryPage() {

    const router = useRouter()
    const productsCategory = router.query.category 

    const [products, setProducts] = useState<Product[]>()

    useEffect(() => {
        if (productsCategory !== undefined)
        axios.get(`https://dummyjson.com/products/category/${productsCategory}`)
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [productsCategory])

    

    return <div className="text-dark-2 bg-light-1">

    <NavBarComponent />

    <CategoryComponent />

    {products !== undefined && products.length ?  <div className="shadow-md">

    <h2 className="font-semibold text-3xl md:text-4xl p-10">{`Category: ${productsCategory?.replace("-", " ").toUpperCase()}`}</h2>
    
     <CategoryListComponent products={products} />

     </div>  : <p className="text-3xl text-center font-bold p-8">{`No products available for the category "${productsCategory?.toLowerCase()}"`}</p>}
    
    <ContactFormComponent />

    <FooterComponent />
    
    </div>
}