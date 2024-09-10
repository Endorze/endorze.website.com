import { useState } from "react";
import styles from "./ContactMe.module.css"


const ContactMe = () => {

    const [name, setName] = useState<string>();


    return <div className={styles.ContactFormWrapper}>
        <div className={styles.LeftContactForm}>
            <h1>Vill du kontakta mig?</h1>
            <div className={styles.ContactInfo}>
                <p className={styles.ContactMeText}>Kontakta mig direkt</p>
                <p>Telefon: </p>
                <a href="tel:0709595287">0709-59 52 87</a>
                <p className={styles.EmailParagraph}>Email:</p>
                <a href="mailto:Alexyurihallgren@hotmail.com">Alexyurihallgren@hotmail.com</a>
            </div>
            <img src=""></img>
        </div>
        <div className={styles.RightContactForm}>
            <h1>Kontakta mig här</h1>
            <p>Återkoppling sker inom 1-2 dagar.</p>
            <div className={styles.RightContactInputs}>
                <input placeholder="E-mail" />
                <input placeholder="Namn"></input>
                <input placeholder="Telefonnr:"></input>
                <div className={styles.TextAreaWrapper}>
                <textarea placeholder="Beskriv ditt ärende" />
                <button>Skicka</button>
                </div>
            </div>
        </div>
    </div>
}

export default ContactMe;