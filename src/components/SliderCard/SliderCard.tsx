import { ReactNode } from "react";
import styles from "./SliderCard.module.css";
import img from "../../assets/images/myprojectsimg/kanthermworkimg.jpg"

type CardProps = {
  title: string;
  text: string;
  aHref: string;
  children?: ReactNode;
};

const SliderCard = (props: CardProps) => {
  const { title, text, aHref, children } = props;

  return (
    <div className={styles.Card}>
      <div>
        <img src={img} className={styles.CardImage}></img>
      </div>
      <div className={styles.CardTextSection}>
        <a href={aHref} target="_blank">
          <h2>{title}</h2>
          <p>{text}</p>
        </a>
        <div className={styles.LogoImage}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
