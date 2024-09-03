import React, { useEffect, useRef } from "react";
import styles from "./HorizontalSlider.module.css";
import SliderCard from "../SliderCard/SliderCard";
import kanthermimg from "../../assets/images/myprojectsimg/favicon.png";

// Definiera typ för korten
interface Card {
  id: number;
  content: React.ReactNode;
}

const HorizontalSlider: React.FC = () => {
  // Referens till slider-elementet
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Klona det första elementet för att möjliggöra kontinuerlig rullning
    const firstElement = slider.children[0] as HTMLElement;
    const clonedFirstElement = firstElement.cloneNode(true) as HTMLElement;
    slider.appendChild(clonedFirstElement);

    let currentScroll = 0;
    const scrollWidth = slider.scrollWidth / 2; // Halva scrollbredden

    const animateSlider = () => {
      currentScroll += 1; // Justera hastigheten genom att ändra värdet

      if (currentScroll >= scrollWidth) {
        currentScroll = 0; // Återställ till början
      }

      slider.style.transform = `translateX(-${currentScroll}px)`;
      requestAnimationFrame(animateSlider); // Kontinuerlig animation
    };

    // Starta animationen
    const animationFrameId = requestAnimationFrame(animateSlider);

    // Städa upp vid unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Definiera korten
  const cards: Card[] = [
    {
      id: 1,
      content: (
        <SliderCard
          title="Kantherm"
          text="Check out my work at Kantherm"
          aHref="https://kantherm.se/"
        >
          <img src={kanthermimg} alt="Kantherm" />
        </SliderCard>
      ),
    },
    {
      id: 2,
      content: (
        <SliderCard
          title="Eget 1"
          text="Check out my work at Kantherm"
          aHref="https://kantherm.se/"
        >
          <img src={kanthermimg} alt="Eget 1" />
        </SliderCard>
      ),
    },
    {
      id: 3,
      content: (
        <SliderCard
          title="Eget 2"
          text="Check out my work at Kantherm"
          aHref="https://kantherm.se/"
        >
          <img src={kanthermimg} alt="Eget 2" />
        </SliderCard>
      ),
    },
    {
      id: 4,
      content: (
        <SliderCard
          title="Eget 3"
          text="Check out my work at Kantherm"
          aHref="https://kantherm.se/"
        >
          <img src={kanthermimg} alt="Eget 3" />
        </SliderCard>
      ),
    },
    {
      id: 5,
      content: (
        <SliderCard
          title="Eget 4"
          text="Check out my work at Kantherm"
          aHref="https://kantherm.se/"
        >
          <img src={kanthermimg} alt="Eget 4" />
        </SliderCard>
      ),
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            {card.content}
          </div>
        ))}
        {/* Den andra uppsättningen kort */}
        {cards.map((card) => (
          <div key={card.id + "-duplicate"} className={styles.card}>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
