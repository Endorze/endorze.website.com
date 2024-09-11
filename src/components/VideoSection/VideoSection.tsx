import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoSection.module.css"
import logo from "../../assets/images/headerimg/Alexander.svg"
import { useTranslation } from "react-i18next";

const VideoSection: React.FC = () => {
  const videoPath = "";

  const { t } = useTranslation();



  return (
    <div className={styles.Wrapper}>
      <div className={styles.Video}>
        <ReactPlayer
          className={styles.VideoPlayer}
          url={"https://www.youtube.com/watch?v=lrf-GAYUOkQ"}
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width={"100%"}
          height={""}
        />
        <div className={styles.Text}>
            <img src={logo}></img>
            <h1>{t("videocard.title")}</h1>
            <p>{t("videocard.text")}</p>
            <div className={styles.VideoButtonsWrapper}>
            <button className={styles.VideoButton1}>{t("videocard.contactButton")}</button>
            <button className={styles.VideoButton2}>{t("videocard.myprojectsButton")}</button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default VideoSection;
