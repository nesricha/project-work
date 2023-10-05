import { Product } from "@/types/Product"
import ProductCardComponent from "./ProductCardComponent"
import styles from "./styles/Styles.module.css"

type Prop = {
    products: Product[]
}

export default function CategoryListComponent(props: Prop) {


    return <>

    {/* <ul className={`${styles.productsList}`}> */}

    <ul className="grid max-w-7xl mx-auto px-10 justify-items-center gap-4 sm:justify-items-stretch grid-cols-1 xl-grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">

        {props.products.map(product => <li key={product.id}> <ProductCardComponent product={product}/> </li>)}

    </ul>
    </>
}