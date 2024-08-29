import React from "react";
import styles from "./Home.module.css"
import VideoSection from "../components/VideoSection/VideoSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import SpaceSection from "../components/SpaceSection/SpaceSection";
import MyCvSection from "../components/MyCvSection/MyCvSection";
const Home = () => {
    return <div className={styles.Wrapper}>
        <VideoSection />
        <SpaceSection />
        <AboutMeSection />
        <SpaceSection />
        <MyCvSection />
        <SpaceSection />
    </div>
}

export default Home;