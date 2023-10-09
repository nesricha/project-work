
import { useState } from "react"
import styles from "../styles/Styles.module.css"
// import Datepicker from "react-tailwindcss-datepicker"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export default function ContactFormComponent() {


    const [startDate, setStartDate] = useState(new Date());



    return <div id="contact" className="bg-gradient-to-b from-dark-1 to-light-1 py-24 px-10 shadow-md">

        <h2 className="text-center font-bold text-light-1 text-3xl md:text-4xl py-3 md:py-5">CONTACT US</h2>

        <form className="max-w-md mx-auto">


            <div className="w-11/12 mx-auto pb-3">

                <label className="block p-1" htmlFor="name">Name: </label>
                <input className="w-full p-2 rounded-md focus-visible:outline-light-2 focus-visible:outline-light-2" type="text" id="name" placeholder=" Enter your name" required />

            </div>


            <div className="w-11/12 mx-auto pb-3">

                <label className="block p-1" htmlFor="lastName">Last name: </label>
                <input className="w-full p-2 rounded-md focus-visible:outline-light-2" type="text" id="lastName" placeholder=" Enter your last name" required />

            </div>


            <div className="w-11/12 mx-auto pb-3">

                <label className="block p-1" htmlFor="email">Email: </label>
                <input className="w-full p-2 rounded-md focus-visible:outline-light-2" type="email" id="email" placeholder=" Enter your email" required />

            </div>

{/* DA SISTEMARE 

            <div className="w-11/12 mx-auto pb-3">

                <label className="block p-1" htmlFor="date">Date of birth: </label>
                <div className="w-full rounde-md overflow-hidden flex justify-stretch items-stretch justify-items-stretch">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-[95vw] rounded-md p-2 overflow-hidden focus-visible:outline-light-2" />

                </div>
            </div> */}


            <div className="w-11/12 mx-auto pb-3">

                <label className="block p-1" htmlFor="education">Educational level: </label>
                <select className="w-full p-2 rounded-md focus-visible:outline-light-2" id="education">
                    <option value="select"> Select an option </option>
                    <option value="elementary"> Elementary School </option>
                    <option value="middle"> Middle School </option>
                    <option value="diploma"> High School Diploma or Higher </option>
                </select>

            </div>


            <div className="w-11/12 mx-auto pb-3">

                <label className="block p-1" htmlFor="message">Message: </label>
                <textarea className="w-full p-2 rounded-md focus-visible:outline-light-2" id="message" cols={30} rows={5} placeholder=" Write a message (optional)" />

            </div>


            <button className="w-11/12 mx-5 my-6 p-2.5 bg-light-2 rounded-md hover:bg-dark-1" type="submit" disabled>Submit</button>

        </form>

    </div>
}