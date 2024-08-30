import React from "react";
import img from "../../assets/images/cvimg/mittcv.png";
import styles from "./MyCvSection.module.css";
import logo from "../../assets/images/headerimg/Alexander.svg";

const MyCvSection = () => {
  return (
    <div className={styles.MyCvWrapper}>
      <div className={styles.CvImgDiv}>
        <h2>Mitt CV</h2>
        <div className={styles.MyCvTextButton}>
        <p>Senast uppdaterad 2024-08-29</p>
        <button className={styles.DownloadPdfButton}>
            <a href="/pdf/AlexanderHallgrenJobbCV.pdf" download={true}>
              Download Resume
            </a>
          </button>
        </div>
        <img src={img}></img>
      </div>
    </div>
  );
};

export default MyCvSection;
