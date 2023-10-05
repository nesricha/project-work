import axios from "axios"
import styles from "../styles/Styles.module.css"
import { useEffect } from "react"


export default function NavBarComponent() {

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/categories`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    }, [])

    return <div className={`${styles.navBar}`}>
        <a href="/"> 
        <img src="/shopping-bag-logo.jpg" alt="shopping bag logo" />
        </a>

        <ul>
            <li><a href="#" target="_blank">Favorites</a></li>
            <li><a href="#" target="_blank">Cart</a></li>
            <li><a href="#" target="_blank">Contact Us</a></li>
            {/* <li><a href="#" target="_blank">Xiaomi</a></li> */}
            {/* <li><a href="#" target="_blank">Oppo</a></li> */}
            <li><input type="text" placeholder=" Don't search..."/></li>
            <li><a href="#">Cerca</a></li>
        </ul>
    </div>
}