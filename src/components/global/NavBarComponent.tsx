import axios from "axios"
import styles from "../styles/Styles.module.css"
import { useEffect } from "react"


export default function NavBarComponent() {

    return <div className="flex justify-between items-center p-4">
        <a href="/" className="rounded-full w-14 md:w-20 overflow-hidden grow-0">
            <img src="/logo.png" alt="logo" />
        </a>

        {/* big screen */}
        <ul className=" hidden md:flex grow justify-evenly max-w-sm mx-auto lg:translate-x-1/4">
            <li><a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1" href="#" >Favorites</a></li>
            <li><a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1" href="#" >Cart</a></li>
            <li><a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1" href="#contact" >Contact Us</a></li>
        </ul>


        {/* small screen */}

        <ul className=" flex md:hidden grow justify-end max-w-sm mx-auto lg:translate-x-1/4">
            <li><a className="py-2 rounded-full hover:shadow-md" href="#" >

                <svg id="i-cart" className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                    <circle cx="25" cy="27" r="2" />
                    <circle cx="12" cy="27" r="2" />
                </svg>

            </a></li>


            <li><a className="py-2 w-10 rounded-full overflow-hidden hover:shadow-md" href="#" >

                {/* <svg id="i-heart" className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
                </svg> */}

                <svg id="i-star" className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                </svg>

            </a></li>

        </ul>



        <ul className="flex items-center">
            <li><input type="text" placeholder="Search.." className="rounded-md outline-double outline-light-2 focus-visible:outline-double px-1 py-1.5 ms-2 md:ms-1" /></li>
            <li className="px-2.5"><a href="#" className="hidden md:flex py-1.5 px-8 border border-dark-2 hover:bg-light-2 hover:border-light-2 rounded-md font-semibold">Search</a></li>


            {/* small screen */}

            <li className=""><a href="#" className="flex md:hidden py-2 px-3 border border-dark-2 hover:bg-light-2 hover:border-light-2 rounded-md font-semibold">
                <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <circle cx="14" cy="14" r="12" />
                    <path d="M23 23 L30 30" />
                </svg>
            </a></li>
        </ul>





    </div>
}