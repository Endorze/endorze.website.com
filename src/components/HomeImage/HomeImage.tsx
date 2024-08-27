import React, { Children } from "react";
import styles from "./SplitImage.module.css"

type ImageType = {
    children?: React.ReactNode;
}


const HomeImage = (props: ImageType) => {

    const { children } = props;

    return <div className={styles.imageContainer}>
        <img src={"https://images.unsplash.com/photo-1724583698859-8c88eb76fe1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className={`${styles.image} ${styles.image1}`}></img>
    </div>
}

export default HomeImage;