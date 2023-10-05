import NavBar from "./global/NavBarComponent"
import styles from "./styles/Styles.module.css"
import { ProductInfo } from "@/types/ProductInfo"

type Prop = {
    product: ProductInfo
}

export default function ProductInfoComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))
    
    return <div className={`${styles.productInfo}`}>

    <img src={prop.product.images[0]} alt={prop.product.title} />

    <h2>{prop.product.title}</h2>

    <h3>{prop.product.brand}</h3>
    
    <p>{prop.product.category}</p>
    
    <p>{prop.product.description}</p>
    
    <h4>{prop.product.price} $ </h4>

    <p className={`${styles.oldPrice}`}>{` ${oldPrice} $ `}</p>

    <p>{` - ${prop.product.discountPercentage} % OFF`}</p>

    <p>{prop.product.rating} /5</p>

    <p>Stock: {prop.product.stock}</p>
    

    </div>
}