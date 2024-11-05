import styles from "./Card.module.css";
import { Person } from "../../../../model/person.ts";
import { Service } from "../../../../model/service.ts";

type props = {
  person: Person;
};
function Card({ person }: props) {
  const happyPatient = `(${Math.floor((person.happyPatients / person.allPatients) * 100)}%) ${person.happyPatients.toLocaleString()} بیمار راضی`;
  return (
    <div className={styles.card}>
      <img src={person.image} />
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles["doctor-name"]}>{person.name}</div>
          <span className={styles.star}>
            {person.star} <img alt="" src="/icons/star.png"></img>
          </span>
        </div>
        <div className={styles.special}>{person.specialtyName}</div>
        <div className={styles.client}>{happyPatient}</div>
        <div className={styles.fields}>
          {person.services.map((service: Service) => (
            <button>{service.name}</button>
          ))}
        </div>
      </div>
      <hr />
      <div className={styles.address}>
        <img alt="" src="/icons/black-location.png"></img>
        {person.address}
      </div>
    </div>
  );
}

export default Card;
