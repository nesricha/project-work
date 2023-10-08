import { useState } from "react"
import NavBar from "./global/NavBarComponent"
import styles from "./styles/Styles.module.css"
import { ProductInfo } from "@/types/ProductInfo"

type Prop = {
    product: ProductInfo
}

export default function ProductInfoComponent(prop: Prop) {

    let oldPrice = Math.ceil(prop.product.price * 100 / (100 - prop.product.discountPercentage))

    const [selectedImage, setSelectedImage] = useState<string>(prop.product.images[0])

    return <div className="p-14 flex flex-row flex-wrap ">

        <div className="mx-auto p-3 md:w-6/12">

           <div className="w-11/12 h-[55vmin] md:h-[30vw] overflow-hidden mx-auto my-4"> 
            <img src={selectedImage} alt={prop.product.title} className="object-cover mx-auto max-h-full p-1 border border-2 border-light-3 rounded-md" />
           </div>

            <div className="flex flex-wrap justify-center">

                {prop.product.images.map(image => <a className={`w-20 m-2 border border-2 border-light-3 p-0.5 rounded-md ${image === selectedImage && " border-4"}`} href="#" onClick={() => setSelectedImage(image)}>
                    <img src={image} alt={prop.product.title} key={image} className="h-full object-cover" />
                </a>)}

            </div>

        </div>

        <div className="min-w-[40vw] p-3 md:w-6/12">

            <h2 className="font-bold text-3xl py-3">{prop.product.title}</h2>

            <h3 className="font-semibold text-xl py-2">{prop.product.brand}</h3>

            <p>{prop.product.category}</p>

            <p>{prop.product.description}</p>

            <h4>{prop.product.price} $ </h4>

            <p className={`${styles.oldPrice}`}>{` ${oldPrice} $ `}</p>

            <p>{` - ${prop.product.discountPercentage} % OFF`}</p>

            <p>{prop.product.rating} /5</p>

            <p>Stock: {prop.product.stock}</p>
        </div>




    </div>
}