import React from "react";
import styles from "./Home.module.css"
import VideoSection from "../components/VideoSection/VideoSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
const Home = () => {
    return <div className={styles.Wrapper}>
        <VideoSection />
        <AboutMeSection />
    </div>
}

export default Home;