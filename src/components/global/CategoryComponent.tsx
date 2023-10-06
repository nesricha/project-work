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


    return <div className="text-center bg-gradient-to-t from-[#ceba9b] p-5">

    {/* <h2> CATEGORIES </h2> */}
<h1 className="font-medium text-4xl md:text-6xl py-3 md:py-5 font-serif">CATEGORIES
         </h1>
    <ul className={`${styles.categories}`}>
        
        <li> <a href="/">All products</a></li>
        {categories?.map(category => <li key={category}> <a href={`/category/${category}`}> {category.replace("-", " ").toUpperCase() } </a> </li>)}
        
    </ul>


    </div>
}