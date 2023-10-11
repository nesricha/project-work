import { useState } from "react"


export default function NavBarComponent() {

    const [search, setSearch] = useState<string>()


    return <div className="flex justify-between items-center p-4">

        <a href="/" className="rounded-full transition hover:scale-105 w-16 shadow-md md:w-20 overflow-hidden grow-0">
            <img src="/logo.png" alt="logo" />
        </a>

        {/* big screen */}
        <ul className=" hidden md:flex grow justify-evenly max-w-sm mx-auto lg:translate-x-1/4">

            <li>
                <a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1"
                    href="#"
                    onClick={event => {
                        event.preventDefault()
                        alert("Work in progress")
                    }} >Favorites</a></li>

            <li>
                <a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1"
                    href="#"
                    onClick={event => {
                        event.preventDefault()
                        alert("Work in progress")
                    }} >Cart</a></li>

            <li>
                <a className="text-xl font-semibold py-2 px-3 hover:rounded-md hover:bg-gradient-to-t hover:from-light-1"
                    href="#contact" >Contact Us</a></li>

        </ul>


        {/* small screen */}

        <ul className=" flex md:hidden grow justify-end max-w-sm mx-auto lg:translate-x-1/4">
            <li>
                <a className="py-2"
                    href="#"
                    onClick={event => {
                        event.preventDefault()
                        alert("Work in progress")
                    }}>

                    <svg
                        id="i-cart"
                        className="mx-1.5 p-[1px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="27"
                        height="27"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2">
                        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                        <circle cx="25" cy="27" r="2" />
                        <circle cx="12" cy="27" r="2" />
                    </svg>
                </a>
            </li>


            <li>
                <a className="py-2"
                    href="#"
                    onClick={event => {
                        event.preventDefault()
                        alert("Work in progress")
                    }}>
                    <svg
                        id="i-star"
                        className="mx-1.5 p-[1px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="27"
                        height="27"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2">
                        <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                    </svg>
                    {/* <svg id="i-heart" className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
                    </svg> */}
                </a>
            </li>
        </ul>



        <form 
        id="csSearchForm"
        className="flex items-center"
        autoComplete="off"
        action={`/search/${search}`}>
            <input
                type="text"
                placeholder="Search.."
                id="searchInput"
                autoComplete="off"
                className="rounded-md outline-double outline-light-2 focus-visible:outline-double px-1 py-1.5 mx-1 md:mx-3"
                onChange={event => setSearch(event.target.value)} />

            <button type="submit"
                className="hidden md:flex py-1.5 px-8 border border-dark-2 hover:bg-light-2 hover:border-light-2 rounded-md font-semibold">Search</button>


            {/* small screen */}

            <button type="submit"
                className="flex md:hidden py-2 px-1.5 border border-dark-2 hover:bg-light-2 hover:border-light-2 rounded-md font-semibold">

                <svg
                    id="i-search"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentcolor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2">
                    <circle cx="14" cy="14" r="12" />
                    <path d="M23 23 L30 30" />
                </svg>
            </button>
        </form>





    </div>
}