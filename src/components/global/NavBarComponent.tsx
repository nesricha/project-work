import axios from "axios"
import styles from "../styles/Styles.module.css"
import { useEffect } from "react"


export default function NavBarComponent() {

    return <div className="flex justify-between items-center p-4">
        <a href="/" className="rounded-full w-14 overflow-hidden grow-0"> 
        <img src="/shopping-bag-logo.jpg" alt="shopping bag logo" className="scale-125"/>
        </a>

{/* big screen */}
            <ul className=" hidden md:flex grow justify-evenly max-w-sm mx-auto translate-x-1/4">
            <li><a className="hover:shadow-xl py-2 hover:rounded-md hover:bg-gradient-to-b hover:from-white" href="#" target="_blank">Favorites</a></li>
            <li><a className="hover:shadow-xl py-2 hover:rounded-md hover:bg-gradient-to-b hover:from-white" href="#" target="_blank">Cart</a></li>
            <li><a className="hover:shadow-xl py-2 hover:rounded-md hover:bg-gradient-to-b hover:from-white" href="#" target="_blank">Contact Us</a></li>
            </ul>

            <ul className="hidden md:flex items-center">
            <li><input type="text" placeholder="Don't search..." className="rounded-md focus-visible:outline-double focus-visible:outline-amber-50 p-1"/></li>
            <li className="px-2.5"><a href="#" className="py-1 px-6 font-semibold bg-yellow-800 text-amber-50 rounded-md hover:bg-orange-100 hover:text-amber-900">Cerca</a></li>
            </ul>


    </div>
}