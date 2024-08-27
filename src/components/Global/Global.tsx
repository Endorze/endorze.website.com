import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Global.module.css"

const Global = () => {
    return <div className={styles.Wrapper}>
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default Global;