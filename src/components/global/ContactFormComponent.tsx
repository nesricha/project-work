
import styles from "../styles/Styles.module.css"


export default function ContactFormComponent() {
    return <div className={`${styles.contact}`}>

        <h2>Contact Us</h2>

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