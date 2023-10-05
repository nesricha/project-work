import { Product } from "@/types/Product"
import ProductCardComponent from "./ProductCardComponent"
import styles from "./styles/Styles.module.css"

type Prop = {
    products: Product[]
}

export default function CategoryListComponent(props: Prop) {


    return <>

    {/* <ul className={`${styles.productsList}`}> */}

    <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">

        {props.products.map(product => <li key={product.id}> <ProductCardComponent product={product}/> </li>)}

    </ul>
    </>
}