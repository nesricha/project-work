import { useState } from "react"
import { ProductInfo } from "@/types/ProductInfo"

type Prop = {
    product: ProductInfo
}

export default function ProductInfoComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    const [selectedImage, setSelectedImage] = useState<string>(prop.product.images[0])

    return <div className="p-3 md:p-10" key={prop.product.id}>

        <p>Category: <a href={`/category/${prop.product.category}`} className="underline hover:font-medium "> {prop.product.category.toUpperCase()}</a></p>

        <div className="p-10 flex flex-row flex-wrap ">

            <div className="mx-auto p-3 lg:w-6/12">

                <div className="min-h-[250px] h-[38vw] lg:h-[25vw] vertical-middle overflow-hidden mx-auto my-4">
                    <img src={selectedImage} alt={prop.product.title} className="object-cover mx-auto max-h-full p-1 border border-2 border-light-3 rounded-md" />
                </div>

                <div className="flex flex-wrap justify-center">

                    {prop.product.images.map((image, index) =>
                        <div
                            className={`w-16 m-2 border border-2 border-light-3 p-0.5 rounded-md hover:cursor-pointer ${image === selectedImage && " border-4 scale-125"}`}
                            onClick={() => setSelectedImage(image)}>

                            <img src={image}
                                alt={prop.product.title}
                                key={`${prop.product.id}.${index}`}
                                className="h-full object-cover" />

                        </div>
                    )}

                </div>

            </div>

            <div className="min-w-[40vw] p-3 md:w-6/12">

                <h2 className="font-bold text-3xl py-3">{prop.product.title}</h2>

                <h3 className="text-xl pb-5">{prop.product.brand}</h3>

                <span className="font-semibold text-2xl px-1.5 ">{prop.product.price} $  </span>

                <span className="text-lg px-1.5 line-through">{` ${oldPrice} $ `}</span>


                <p className="font-bold text-xl px-1.5 py-3 text-amber-700"> {` - ${prop.product.discountPercentage} % OFF`} </p>

                <p className="font-bold text-xl py-2 pt-8">Description</p>
                <p>{prop.product.description}</p>

                <p className="font-bold text-xl py-2 pt-8">Rating</p>
                <p className="text-lg px-1.5">{prop.product.rating} /5</p>

                <p className="font-bold text-xl py-2 pt-8" >Stock: <span className="text-lg px-1.5 font-normal">{prop.product.stock}</span></p>
            </div>


        </div>

    </div>
}