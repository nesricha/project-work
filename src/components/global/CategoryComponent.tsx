import axios from "axios"
import { useEffect, useState } from "react"
import styles from "../styles/Styles.module.css"

export default function CategoryComponent() {

    const [categories, setCategories] = useState<string[]>()

    
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    }, [])


    return <div className="text-center shadow-md bg-gradient-to-b from-[#f1e2ca] p-10">

<h1 className="font-bold text-[#fffdf4] text-3xl md:text-4xl py-3 md:py-5">CATEGORIES</h1>

    <ul className="grid mx-auto px-10 py-6 justify-items-center gap-4 grid-cols-1 xl-grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        
        <li> <a href="/" className="text-xl hover:text-amber-50 underline hover:shadow-xl py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-[#ece5d6]">All products</a></li>
        {categories?.map(category => <li key={category}> 
        <a href={`/category/${category}`} className="text-xl hover:text-amber-50 hover:shadow-xl py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-[#ece5d6]"> 
        {category.replace("-", " ").toUpperCase() } 
        </a> 
        </li>)}
        
    </ul>


    </div>
}