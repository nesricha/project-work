import { Product } from "@/types/Product"
import ProductCardComponent from "./ProductCardComponent"

type Prop = {
    products: Product[]
}

export default function CardListComponent(props: Prop) {


    return <>

    <ul className="grid max-w-md sm:max-w-7xl mx-auto py-16 px-14 gap-12 justify-items-stretch grid-cols-1 xl-grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">

        {props.products.map(product => <li key={product.id}> <ProductCardComponent product={product}/> </li>)}

    </ul>
    </>
}