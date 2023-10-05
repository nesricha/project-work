import { Product } from "@/types/Product"
import ProductCardComponent from "./ProductCardComponent"
import styles from "./styles/Styles.module.css"

type Prop = {
    products: Product[]
}

export default function CategoryListComponent(props: Prop) {


    return <>

    <ul className={`${styles.productsList}`}>

        {props.products.map(product => <li key={product.id}> <ProductCardComponent product={product}/> </li>)}

    </ul>
    </>
}