import styles from "./Cards.module.css";
import Card from "./components/Card/Card.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import Indicator from "../../components/Indicator/Indicator.tsx";
import { Person } from "../../model/person.ts";
import { useState } from "react";

type props = {
  title: titleProps;
  persons: Person[];
};

function Cards({ title, persons }: props) {
  const increaseButtonClickHandler = () => setScrollerX(scrollerX + 300);
  const decreaseButtonClickHandler = () => setScrollerX(scrollerX - 300);

  const [scrollerX, setScrollerX] = useState<number>(0);
  return (
    <div className={styles.cards}>
      <Title prefix={title.prefix} main={title.main} suffix={title.suffix} />
      <div className={styles.container}>
        <div
          className={styles.scroller}
          style={{ transform: `translateX(${scrollerX}px)` }}
        >
          {persons.map((person) => (
            <Card key={person.id} person={person} />
          ))}
        </div>
      </div>
      <Indicator
        onNext={increaseButtonClickHandler}
        onPrevious={decreaseButtonClickHandler}
      />
    </div>
  );
}

export default Cards;
