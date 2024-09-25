import { useState } from "react";
import styles from "./ContactMe.module.css"
import logo from "../../assets/images/headerimg/Alexander.svg"


const ContactMe = () => {

    const [name, setName] = useState<string>();


    return <div className={styles.ContactFormWrapper} id="contactform">
        <div className={styles.LeftContactForm}>
            <h1>Vill du kontakta mig?</h1>
            <div className={styles.ContactInfo}>
                <p className={styles.ContactMeText}>Kontakta mig direkt</p>
                <p>Telefon: </p>
                <a href="tel:0709595287">0709-59 52 87</a>
                <p className={styles.EmailParagraph}>Email:</p>
                <a href="mailto:Alexyurihallgren@hotmail.com">Alexyurihallgren@hotmail.com</a>
            </div>
            <div className={styles.contactformLogo}>
                <img src={logo}></img>
            </div>
        </div>
        <div className={styles.RightContactForm}>
            <h1>Kontakta mig här</h1>
            <p>Återkoppling sker inom 1-2 dagar.</p>
            <div className={styles.RightContactInputs}>
                <form action="mailto:alexyurihallgren@hotmail.com" method="post" encType="name/email/telephone/text">
                    <input placeholder="E-mail" name="email" required type="text" />
                    <input placeholder="Namn" name="name" type="text" />
                    <input placeholder="Telefonnr:" name="telephone" type="number"></input>
                    <div className={styles.TextAreaWrapper}>
                        <textarea placeholder="Beskriv ditt ärende" name="text" />
                        <button value="Submit">Skicka</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default ContactMe;