import React from "react";
import styles from "./AboutMeSection.module.css";
import aleximg from "../../assets/images/aboutmeimg/bildpamig.jpg";
import { useTranslation } from "react-i18next";

const AboutMeSection = () => {

    const { t } = useTranslation();

  return (
    <div className={styles.AboutMeWrapper}>
      <div className={styles.AboutMeText}>
        <div>
          <h1>{t("aboutme.title")}</h1>
        </div>
      </div>
      <div className={styles.HorizontalDiv}>
        <div>
          <img src={aleximg} className={styles.RoundImg}></img>
        </div>
        <div>
          <p>
            {t("aboutme.text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
