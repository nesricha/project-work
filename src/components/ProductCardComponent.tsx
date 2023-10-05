import { Product } from "@/types/Product"
import styles from "./styles/Styles.module.css"

type Prop = {
    product: Product
}

export default function ProductCardComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    return <a href={`/product/${prop.product.id}`} className={`${styles.productCard}`}>


        <div className={`${styles.cardImage}`}>

            <img src={prop.product.images[0]} alt={prop.product.title} />

        </div>

        <div className={`${styles.cardInfo}`}>
            <div>
                <strong>{prop.product.title}</strong>
                <p>{prop.product.brand}</p>
                <span className={`${styles.oldPrice}`}>  {`${oldPrice}$`}</span>
                <span>{` - ${prop.product.discountPercentage}% OFF`}</span>
                <p><strong> {prop.product.price}$ </strong></p>
                <p>{prop.product.rating} /5</p>
            </div>

            <div className={`${styles.cardCTA}`}>
                <a href="#">Add to favorites</a>
                <a href="#">Add to cart</a>
            </div>

        </div>



    </a>
}