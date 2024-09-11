import React from "react";
import SliderCard from "../SliderCard/SliderCard";
import styles from "./HorizontalSlider.module.css";

const HorizontalSlider: React.FC = () => {
  return (
    <div>
      <div className={styles.Scroller}>
        <div className={`${styles.Item} ${styles.Item1}`}><SliderCard 
        title="Kantherm"
        text="Check out my work for Kantherm"
        aHref="https://kantherm.se/"/></div>
        <div className={`${styles.Item} ${styles.Item2}`}><SliderCard 
        title="Kantherm"
        text="Check out my work for Kantherm"
        aHref="https://kantherm.se/"/></div>
        <div className={`${styles.Item} ${styles.Item3}`}><SliderCard 
        title="Kantherm"
        text="Check out my work for Kantherm"
        aHref="https://kantherm.se/"/></div>
        <div className={`${styles.Item} ${styles.Item4}`}><SliderCard 
        title="Kantherm"
        text="Check out my work for Kantherm"
        aHref="https://kantherm.se/"/></div>
      </div>
    </div>
  );
};
export default HorizontalSlider;
