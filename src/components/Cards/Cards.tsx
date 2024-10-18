import styles from "./Cards.module.css";
import Card from "./components/Card/Card.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import Indicator from "../../components/Indicator/Indicator.tsx";
import { Person } from "../../models/person.ts";
import { useState } from "react";

type props = {
  title: titleProps;
  persons: Person[];
};

function Cards({ title, persons }: props) {
  const [scrollerX, setScrollerX] = useState<number>(0);

  const increaseButtonClickHandler = (): void => {
    setScrollerX(scrollerX + 100);
  };

  const decreaseButtonClickHandler = (): void => {
    setScrollerX(scrollerX - 100);
  };

  return (
    <div className={styles.cards}>
      <Title prefix={title.prefix} main={title.main} suffix={title.suffix} />
      <div className={styles.container}>
        <div
          className={styles.scroller}
          style={{ transform: `translateX(${scrollerX}%)` }}
        >
          {persons.map((person) => (
            <Card key={person.ID} person={person} />
          ))}
        </div>
      </div>
      <Indicator
        onPrevious={increaseButtonClickHandler}
        onNext={decreaseButtonClickHandler}
      />
    </div>
  );
}

export default Cards;
