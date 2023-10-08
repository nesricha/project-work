import { Product } from "@/types/Product"
import styles from "./styles/Styles.module.css"

type Prop = {
    product: Product
}

export default function ProductCardComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    return  <a href={`/product/${prop.product.id}`} className={`${styles.productCard} flex flex-col h-full shadow-md md:hover:shadow-xl rounded-xl overflow-hidden bg-white hover:bg-gradient-to-t hover:from-light-1 md:hover:scale-105`}>


        <div className={`${styles.cardImage} h-3/6 overflow-hidden`}>

            <img className="mx-auto scale-125 max-h-44 object-cover" src={prop.product.images[0]} alt={prop.product.title} />

        </div>

        <div className="py-5 px-4">
        

            <div>

                <h5 className="font-semibold text-lg">{prop.product.title.toUpperCase()}</h5>
                <p>{prop.product.brand}</p>
                <span className="line-through">  {`${oldPrice}$`}</span>
                <span className="font-medium">{` - ${prop.product.discountPercentage}% OFF`}</span>
                <p className="font-semibold text-lg">{prop.product.price}$</p>
                <p>{prop.product.rating} /5</p>

            </div>

            <div className="flex justify-between py-2.5">

                <a href="#" className="font-semibold hover:underline hover:font-bold">Add to favorites</a>
                <a href="#" className="font-semibold hover:underline hover:font-bold">Add to cart</a>

            </div>

        </div>



    </a>
}