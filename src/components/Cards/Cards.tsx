import styles from "./Cards.module.css";
import Card from "./Card/Card.tsx";
import Title from "../Title/Title.tsx";
import { ReactElement } from "react";

type Person = {
  id: string;
  name: string;
  star: string;
  clinicSpecialName: string;
  happyPatient: string;
  address: string;
  fields: string[];
  image: string;
};

type Props = {
  title: ReactElement<typeof Title>;
  persons: Person[];
};

function Cards({ title, persons }: Props) {
  return (
    <div className={styles.cards}>
      {title}
      <div className={styles.card}>
        {persons.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
