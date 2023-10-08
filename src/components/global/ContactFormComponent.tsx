
import styles from "../styles/Styles.module.css"


export default function ContactFormComponent() {
    return <div id="contact" className="bg-gradient-to-b from-dark-1 p-10">

        <h2 className="text-center font-bold text-light-1 text-3xl md:text-4xl py-3 md:py-5">CONTACT US</h2>

        <form className="max-w-md mx-auto">
            

        <div className="w-11/12 mx-auto pb-3">

        <label className="block p-1" htmlFor="name">Name: </label>
        <input className="w-full p-2 rounded-md" type="text" id="name"  placeholder=" Enter your name" required/>
            
            </div>


        <div className="w-11/12 mx-auto pb-3">

        <label className="block p-1" htmlFor="lastName">Last name: </label>        
        <input className="w-full p-2 rounded-md" type="text" id="lastName" placeholder=" Enter your last name" required />
            
            </div>


        <div className="w-11/12 mx-auto pb-3">

        <label className="block p-1" htmlFor="email">Email: </label>
        <input className="w-full p-2 rounded-md" type="email" id="email" placeholder=" Enter your email" required />
            
            </div>


        <div className="w-11/12 mx-auto pb-3">

        <label className="block p-1" htmlFor="date">Date of birth: </label>
        <input className="w-full p-2 rounded-md" type="date" id="date" />
            
            </div>


        <div className="w-11/12 mx-auto pb-3">

        <label className="block p-1" htmlFor="education">Educational level: </label>
        <select className="w-full p-2 rounded-md" id="education">
            <option value="select"> Select an option </option>
            <option value="elementary"> Elementary School </option>
            <option value="middle"> Middle School </option>
            <option value="diploma"> High School Diploma or Higher </option>
        </select>
            
            </div>


        <div className="w-11/12 mx-auto pb-3">

        <label className="block p-1" htmlFor="message">Message: </label>
        <textarea className="w-full p-2 rounded-md" id="message" cols={30} rows={5} placeholder=" Write a message (optional)" />
            
            </div>



        <button className="w-11/12 mx-5 my-6 p-2.5 bg-light-1 rounded-md hover:bg-dark-1" type="submit">Submit</button>
        
        </form>

    </div>
}