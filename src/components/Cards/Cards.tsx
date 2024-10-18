import styles from "./Cards.module.css";
import Card from "./components/Card/Card.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import Indicator from "../../components/Indicator/Indicator.tsx";
import { Person } from "../../models/person.ts";

type props = {
  title: titleProps;
  persons: Person[];
};

function Cards({ title, persons }: props) {
  return (
    <div className={styles.cards}>
      <Title prefix={title.prefix} main={title.main} suffix={title.suffix} />
      <div className={styles.container}>
        {persons.map((person) => (
          <Card key={person.ID} person={person} />
        ))}
      </div>
      <Indicator />
    </div>
  );
}

export default Cards;
