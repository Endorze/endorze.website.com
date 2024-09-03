import { useTranslation } from "react-i18next";
import styles from "./MyProjects.module.css";

const MyProjects = () => {
  const { t } = useTranslation();
  const text = t("myprojects.title");

  return (
    <div className={styles.MyProjectsWrap}>
      <div className={styles.MyProjectsText}>
        <h1>{text}</h1>
        <p>Nya projekt fylls på allt eftersom.</p>
      </div>
    </div>
  );
};

export default MyProjects;
