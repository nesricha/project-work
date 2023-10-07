
import styles from "../styles/Styles.module.css"


export default function ContactFormComponent() {
    return <div className="text-center bg-gradient-to-b from-dark-1 p-10">

        <h2 className="font-bold text-light-1 text-3xl md:text-4xl py-3 md:py-5">CONTACT US</h2>

        <form className={`${styles.form}`}>
            

        <div className={`${styles.formGroup}`}>

        <label htmlFor="name">Name: </label>
        <input type="text" id="name"  placeholder=" Enter your name" required/>
            
            </div>


        <div className={`${styles.formGroup}`}>

        <label htmlFor="lastName">Last name: </label>        
        <input type="text" id="lastName" placeholder=" Enter your last name" required />
            
            </div>


        <div className={`${styles.formGroup}`}>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder=" Enter your email" required />
            
            </div>


        <div className={`${styles.formGroup}`}>

        <label htmlFor="date">Date of birth: </label>
        <input type="date" id="date" />
            
            </div>


        <div className={`${styles.formGroup}`}>

        <label htmlFor="education">Educational level: </label>
        <select id="education">
            <option value="select"> Select an option </option>
            <option value="elementary"> Elementary School </option>
            <option value="middle"> Middle School </option>
            <option value="diploma"> High School Diploma or Higher </option>
        </select>
            
            </div>


        <div className={`${styles.formGroup}`}>

        <label htmlFor="message">Message: </label>
        <textarea  id="message" cols={30} rows={10} placeholder=" Write a message(optional)" />
            
            </div>



        <button type="submit">Submit</button>
        
        </form>

    </div>
}