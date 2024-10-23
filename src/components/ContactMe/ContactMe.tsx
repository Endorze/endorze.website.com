import { useState } from "react";
import styles from "./ContactMe.module.css";
import img from "../../assets/images/headerimg/Alexander.svg";

const ContactMe = () => {
  const [name, setName] = useState<string>();

  return (
    <div  id="contact-form">
      <p>
        Detta formulär är för närvarande inaktivt eftersom portfolion inte är
        hostad på en server.<br></br> Du kan kontakta mig direkt via
        Alexyurihallgren@hotmail.com.
      </p>
      <div className={styles.ContactFormWrapper}>
        <div className={styles.LeftContactForm}>
          <h1>Kom i kontakt med mig</h1>
          <div className={styles.ContactInfo}>
            <p className={styles.ContactMeText}>Mina uppgifter:</p>
            <p>Telefon: </p>
            <a href="tel:0709595287">0709-59 52 87</a>
            <p className={styles.EmailParagraph}>Email:</p>
            <a href="mailto:Alexyurihallgren@hotmail.com">
              Alexyurihallgren@hotmail.com
            </a>
          </div>
          <img src={img}></img>
        </div>
        <div className={styles.RightContactForm}>
          <h1>Fyll i dina uppgifter</h1>
          <p>Återkoppling sker inom 1-2 dagar.</p>
          <div className={styles.RightContactInputs}>
            <p>Email:</p>
            <input placeholder="E-mail" />
            <p>Namn:</p>
            <input placeholder="Namn"></input>
            <p>Telefonnummer:</p>
            <input placeholder="Telefonnr:"></input>
            <p>Lämna ett meddelande:</p>
            <div className={styles.TextAreaWrapper}>
              <textarea placeholder="Beskriv ditt ärende" />
              <button>Skicka</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
