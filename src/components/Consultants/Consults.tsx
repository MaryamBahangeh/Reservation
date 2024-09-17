import Consult from "./Consult/Consult.tsx";
import Title from "../Title/Title.tsx";
import styles from "./Consults.module.css";
function Consults({ title, persons }) {
  return (
    <div className={styles.consults}>
      <Title title={title}></Title>
      <div className={styles.consult}>
        {persons.map((person) => (
          <Consult person={person} />
        ))}
      </div>
    </div>
  );
}

export default Consults;
