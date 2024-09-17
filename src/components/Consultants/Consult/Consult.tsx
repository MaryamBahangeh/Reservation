import styles from ".//Consult.module.css";
import consultpic from "../../../assets/consultpic.png";
import { FaStar } from "react-icons/fa";

function Consult({ person }) {
  return (
    <div className={styles.consult}>
      <img src={person.image} className={styles.consultpic} />
      <div className={styles.name}>
        <p>{person.name}</p>
        <p>
          {person.star} <FaStar className={styles.star} />
        </p>
      </div>
      <p className={styles.special}>{person.specialName}</p>

      <div className={styles.fields}>
        {person.fields.map((field) => (
          <button>{field}</button>
        ))}
      </div>
      <hr />
      <button className={styles.appointment}>دریافت نوبت</button>
    </div>
  );
}

export default Consult;
