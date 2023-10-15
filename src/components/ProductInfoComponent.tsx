import { useState } from "react"
import { ProductInfo } from "@/types/ProductInfo"

type Prop = {
    product: ProductInfo
}

export default function ProductInfoComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    const [selectedImage, setSelectedImage] = useState<string>(prop.product.images[0])

    // const [fallBackImg, setFallBackImg] = useState<string>()

    return <div className="p-3 md:p-10">

        <p>Category: <a href={`/category/${prop.product.category}`} className="underline hover:font-medium "> {prop.product.category.toUpperCase()}</a></p>

        <div className="p-10 flex flex-row flex-wrap ">

            <div className="mx-auto p-3 lg:w-6/12">

                <div className="min-h-[250px] h-[38vw] lg:h-[25vw] flex items-center overflow-hidden mx-auto my-4">
                    <img
                        src={selectedImage !== undefined ? selectedImage : `/Image_not_available.png`}
                        // onError={() => setFallBackImg("/Image_not_available.png")}
                        alt={prop.product.title}
                        className="object-cover mx-auto max-h-full p-1 border border-2 border-light-3 rounded-md" />
                </div>

                <div className="flex flex-wrap justify-center">

                    {prop.product.images.map((image, index) =>
                        <div
                            className={`transition duration-300 w-16 max-h-[65px] m-2 border border-2 border-light-3 p-0.5 rounded-md hover:cursor-pointer ${image === selectedImage && " border-4 scale-125"}`}
                            key={`${prop.product.id}.${index}`}
                            onClick={() => setSelectedImage(image)}>

                            <img
                                src={image !== undefined ? image : `/Image_not_available.png`}
                                // onError={() => setFallBackImg('/Image_not_available.png')}
                                alt={prop.product.title}
                                className="h-full object-cover mx-auto" />

                        </div>
                    )}

                </div>

            </div>

            <div className="min-w-[40vw] p-3 lg:w-6/12 mx-auto">

                <h2 className="font-bold text-3xl py-3 text-yellow-900">{prop.product.title}</h2>

                <h3 className="text-xl pb-5">{prop.product.brand}</h3>

                <span className="font-semibold text-2xl px-1.5">{prop.product.price} $  </span>

                <span className="text-lg px-1.5 line-through">{` ${oldPrice} $ `}</span>


                <p className="font-bold text-xl px-1.5 py-3 text-yellow-900"> {` - ${prop.product.discountPercentage} % OFF`} </p>

                <p className="font-bold text-xl py-2 pt-8">Description</p>
                <p>{prop.product.description}</p>

                <p className="font-bold text-xl py-2 pt-8">Rating</p>
                <p className="text-lg px-1.5">{prop.product.rating} /5</p>

                <p className="font-bold text-xl py-2 pt-8" >
                    Stock: <span className="text-lg px-1.5 font-normal">{prop.product.stock}</span>
                </p>

                <div className="flex flex-wrap whitespace-nowrap justify-center items-center pt-8">

                    <a href="#" className="m-1 text-center w-[90%] text-yellow-900 hover:text-light-1 hover:bg-yellow-900 font-semibold border border-1 rounded-lg border-yellow-900 transition duration-150 hover:scale-[1.05] p-2"
                        onClick={event => {
                            event.preventDefault()
                            alert(`You added "${prop.product.title.toUpperCase()}" to your wishlist!`)
                        }}>Add to Favorites</a>

                    <a href="#" className="m-1 text-center w-[90%] text-yellow-900 hover:text-light-1 hover:bg-yellow-900 font-semibold border border-1 rounded-lg border-yellow-900 transition duration-150 hover:scale-[1.05] p-2"
                        onClick={event => {
                            event.preventDefault()
                            alert(`You added "${prop.product.title.toUpperCase()}" to your cart!`)
                        }}>Add to Cart</a>

                </div>
            </div>


        </div>

    </div>
}