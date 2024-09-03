import { Children, ReactNode } from "react";
import styles from "./SliderCard.module.css";

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
      <a href={aHref} target="_blank">
        <h2>{title}</h2>
        <p>{text}</p>
      </a>
      {children}
    </div>
  );
};

export default SliderCard;
