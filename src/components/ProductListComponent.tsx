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

    <h2>All products</h2>

    <ul className={`${styles.productsList}`}>
        {products?.map(product => <li key={product.id}>
                <ProductCardComponent product={product} />
        </li>)}
    </ul>
    </>
}