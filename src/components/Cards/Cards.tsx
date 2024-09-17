import styles from "./Cards.module.css";
import Card from "./Card/Card.tsx";
import Title from "../Title/Title.tsx";
function Cards({ title, persons }) {
  return (
    <div className={styles.cards}>
      <Title title={title} />
      <div className={styles.card}>
        {persons.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
