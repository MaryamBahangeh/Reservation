import styles from "./Card.module.css";
import doctorimg from "../../../assets/DoctorPic.png";
import { FaStar, FaMapMarker } from "react-icons/fa";
function Card({ person }) {
  return (
    <div className={styles.card}>
      <img src={person.image} />
      <div className={styles.name}>
        <p>{person.name}</p>
        <p>
          {person.star} <FaStar className={styles.star} />
        </p>
      </div>
      <p className={styles.special}>{person.clinicSpecialName}</p>
      <p className={styles.client}> {person.happyPatient}بیمار راضی </p>
      <div className={styles.fields}>
        {person.fields.map((field) => (
          <button>{field}</button>
        ))}
      </div>
      <hr />

      <p className={styles.address}>
        <FaMapMarker className={styles.map} />
        {person.address}
      </p>
    </div>
  );
}

export default Card;
