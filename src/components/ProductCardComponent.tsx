import { Product } from "@/types/Product"

type Prop = {
    product: Product
}

export default function ProductCardComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    return <div className="group transition duration-300 flex flex-col h-full shadow-md md:hover:shadow-xl rounded-xl overflow-hidden bg-white hover:bg-gradient-to-t hover:from-light-1 md:hover:scale-105 mx-auto md:max-w-[300px]">


        <a href={`/product/${prop.product.id}`} className="group-hover:scale-110 transition duration-300 h-3/6 overflow-hidden">

            <img className="transition duration-300 group-hover:scale-105 mx-auto scale-125 max-h-44 object-contain" src={prop.product.thumbnail} alt={prop.product.title} />

        </a>

        <div className="h-3/6 py-5 px-4">


            <a href={`/product/${prop.product.id}`}>

                <h5 className="text-yellow-900 font-semibold text-md">{prop.product.title.toUpperCase()}</h5>
                <p className="">{prop.product.brand}</p>
                <span className="font-semibold leading-7 text-lg"> {prop.product.price}$ </span>
                <span className="line-through leading-7">  {`${oldPrice}$`}</span>
                <p className="font-medium text-yellow-900">{` - ${prop.product.discountPercentage}% OFF`}</p>
                
                <p>{prop.product.rating} /5</p>

            </a>

            <div className="flex justify-around py-3">

                <a href="#" className="text-yellow-900 font-semibold hover:scale-x-[1.05] underline sm:no-underline hover:underline"
                    onClick={event => {
                        event.preventDefault()
                        alert(`You added "${prop.product.title.toUpperCase()}" to your wishlist!`)
                    }}>+ Favorites</a>

                <a href="#" className="text-yellow-900 font-semibold hover:scale-x-[1.05] underline sm:no-underline hover:underline"
                    onClick={event => {
                        event.preventDefault()
                        alert(`You added "${prop.product.title.toUpperCase()}" to your cart!`)
                    }}>+ Cart</a>

            </div>

        </div>



    </div>
}