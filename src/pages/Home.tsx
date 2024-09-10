import React from "react";
import styles from "./Home.module.css"
import VideoSection from "../components/VideoSection/VideoSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import SpaceSection from "../components/SpaceSection/SpaceSection";
import MyCvSection from "../components/MyCvSection/MyCvSection";
import MyProjects from "../components/MyProjects/MyProjects";
import HorizontalSlider from "../components/HorizontalSlider/HorizontalSlider";
import ContactMe from "../components/ContactMe/ContactMe";
const Home = () => {
    return <div className={styles.Wrapper}>
        <VideoSection />
        <SpaceSection />
        <AboutMeSection />
        <SpaceSection />
        <MyCvSection />
        <SpaceSection />
        <MyProjects />
        <HorizontalSlider />
        <SpaceSection />
        <SpaceSection />
        <ContactMe />
        <SpaceSection />
    </div>
}

export default Home;