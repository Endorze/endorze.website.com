import styles from "./ContactMe.module.css"

const ContactMe = () => {
    return <div className={styles.ContactFormWrapper}>
        <div className={styles.LeftContactForm}>
            <h1>Hej detta är här</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi at magnam voluptas nulla ut incidunt natus veniam quae deleniti placeat dolore repellendus quisquam impedit fugit, dolores totam molestias voluptatum illum.</p>
        </div>
        <div className={styles.RightContactForm}>
            <h1>Och detta är här</h1>
        </div>
    </div>
}

export default ContactMe;