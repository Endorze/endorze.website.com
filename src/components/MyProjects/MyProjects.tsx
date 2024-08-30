import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./MyProjects.module.css"

const MyProjects = () => {

        const Images = [
            "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ];
    

    return <div>
        <div className={styles.SlideEffect}>
            <div style={{ 'backgroundImage': `url(${Images[0]})`}}></div>
        </div>
    </div>
}

export default MyProjects;