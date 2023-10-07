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
            <li><a className="text-xl hover:shadow-xl py-2 px-3 hover:rounded-md hover:bg-gradient-to-b hover:from-white" href="#" target="_blank">Favorites</a></li>
            <li><a className="text-xl hover:shadow-xl py-2 px-3 hover:rounded-md hover:bg-gradient-to-b hover:from-white" href="#" target="_blank">Cart</a></li>
            <li><a className="text-xl hover:shadow-xl py-2 px-3 hover:rounded-md hover:bg-gradient-to-b hover:from-white" href="#" target="_blank">Contact Us</a></li>
            </ul>

            <ul className="hidden md:flex items-center">
            <li><input type="text" placeholder="Don't search..." className="rounded-md outline-[#5c4f3a] focus-visible:outline-double p-1"/></li>
            <li className="px-2.5"><a href="#" className="py-1 px-6 border border-2 border-[#5c4f3a] rounded-md hover:bg-[#5c4f3a] hover:text-white">Search</a></li>
            </ul>

{/* small screen */}



    </div>
}