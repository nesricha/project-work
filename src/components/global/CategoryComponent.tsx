import axios from "axios"
import { useEffect, useState } from "react"

export default function CategoryComponent() {

    const [categories, setCategories] = useState<string[]>()

    
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    }, [])


    return <div className="text-center shadow-md bg-gradient-to-b from-dark-1 to-light-1 py-16 sm:py-24 px-10">

<h1 className="font-bold text-light-1 text-4xl md:text-5xl py-3 md:py-5">CATEGORIES</h1>

    <ul className="grid max-h-[500px] rounded-md scrollbar-thin scrollbar-track-light-2 scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-thumb-light-1 shadow-md sm:shadow-none overflow-auto mx-auto px-10 py-6 justify-items-center gap-4 grid-cols-1 xl-grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 whitespace-nowrap">
        
        <li> <a href="/" className="text-lg md:text-xl hover:text-dark-1 underline hover:shadow-xl leading-6 md:leading-8 py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1">Today's deals</a></li>
        {categories?.map(category => <li key={category}> 
        <a href={`/category/${category}`} className="text-lg md:text-xl hover:text-dark-1 hover:shadow-xl leading-6 md:leading-8 py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1"> 
        {category.replace("-", " ").toUpperCase() } 
        </a> 
        </li>)}
        
    </ul>


    </div>
}