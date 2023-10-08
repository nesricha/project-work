import axios from "axios"
import styles from "../styles/Styles.module.css"
import { useEffect } from "react"


export default function NavBarComponent() {

    return <div className="flex justify-between items-center p-4">
        <a href="/" className="rounded-xl w-20 overflow-hidden grow-0"> 
        <img src="/logo.png" alt="logo"/>
        </a>

{/* big screen */}
            <ul className=" hidden md:flex grow justify-evenly max-w-sm mx-auto lg:translate-x-1/4">
            <li><a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1" href="#" >Favorites</a></li>
            <li><a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1" href="#" >Cart</a></li>
            <li><a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1" href="#contact" >Contact Us</a></li>
            </ul>

            <ul className="hidden md:flex items-center">
            <li><input type="text" placeholder="Don't search..." className="rounded-md outline-light-2 focus-visible:outline-double px-1 py-1.5"/></li>
            <li className="px-2.5"><a href="#" className="py-1.5 px-8 border border-dark-2 hover:bg-light-1 hover:border-light-2 rounded-md font-semibold">Search</a></li>
            </ul>
            

{/* small screen */}



    </div>
}