import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoSection.module.css"
import logo from "../../assets/images/headerimg/Alexander.svg"

const VideoSection: React.FC = () => {
  const videoPath = "";

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
            <h1>Inget är omöjligt</h1>
            <p>Att bli en webbutvecklare har varit en otrolig resa. Vid 2022 avslutade jag min karriär som säljare och valde att satsa på programmering, nu år 2024 är jag stolt att bära titeln Webbutvecklare.</p>
            <div className={styles.VideoButtonsWrapper}>
            <button className={styles.VideoButton1}>Kontakta mig</button>
            <button className={styles.VideoButton2}>Mina projekt</button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default VideoSection;
