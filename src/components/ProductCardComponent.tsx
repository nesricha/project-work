import { Product } from "@/types/Product"
import styles from "./styles/Styles.module.css"

type Prop = {
    product: Product
}

export default function ProductCardComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    return  <a href={`/product/${prop.product.id}`} className={`${styles.productCard} flex flex-col h-full shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white hover:bg-gradient-to-t hover:from-light-1 hover:scale-105 transition`}>
        {/* <a href={`/product/${prop.product.id}`} className="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0">  */}
    


        <div className={`${styles.cardImage} h-3/6 overflow-hidden transition`}>

            <img className="mx-auto scale-125 max-h-44 object-cover transition" src={prop.product.images[0]} alt={prop.product.title} />

        </div>

        <div className="p-4">
        {/* <div className="p-6"> */}
        

            <div>

                <h5>{prop.product.title}</h5>
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