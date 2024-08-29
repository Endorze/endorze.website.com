import React from "react";
import img from "../../assets/images/cvimg/mittcv.png"
import styles from "./MyCvSection.module.css"

const MyCvSection = () => {
    return <div className={styles.MyCvWrapper}>
        <h2>Mitt CV</h2>
        <p>Senast uppdaterad 2024-08-29</p>
        <img src={img}></img>
    </div>
}

export default MyCvSection;
