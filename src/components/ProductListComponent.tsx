import ProductCardComponent from "./ProductCardComponent";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import styles from "./styles/Styles.module.css"
import axios from "axios";

export default function ProductListComponent() {

    
    const [products, setProducts] = useState<Product[]>()
    
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    }, [])



    return <>

    <h2 className="font-semibold text-3xl md:text-4xl p-10"> Today's deals </h2>

        <ul className="grid max-w-md sm:max-w-7xl mx-auto py-24 px-14 gap-12 justify-items-stretch grid-cols-1 xl-grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
            {products?.filter(product=> product.discountPercentage > 15.8).map(product => <li key={product.id}>
                <ProductCardComponent product={product} />
        </li>)}
    </ul>
    </>
}