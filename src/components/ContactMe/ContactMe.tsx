import styles from "./ContactMe.module.css"
import logoimg from "../../assets/images/"

const ContactMe = () => {
    return <div className={styles.ContactFormWrapper}>
        <div className={styles.LeftContactForm}>
            <h1>Kom i kontakt med mig!</h1>
            <div className={styles.ContactInfo}>
                <p>Telefon: </p>
                <a href="tel:0709595287">0709-59 52 87</a>
                <p className={styles.EmailParagraph}>Email:</p>
                <a href="mailto:Alexyurihallgren@hotmail.com">Alexyurihallgren@hotmail.com</a>
            </div>
            <img src=""></img>
        </div>
        <div className={styles.RightContactForm}>
            <h1>Och detta är här</h1>
            <p>lite text under för wow vad coolt</p>
            <div className={styles.RightContactInputs}>
                <input placeholder="E-mail"></input>
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