import styles from "./Card.module.css";

export type Person = {
  id: string;
  name: string;
  star: string;
  clinicSpecialName: string;
  happyPatient: number;
  allPatients: number;
  address: string;
  fields: string[];
  image: string;
};

type props = {
  person: Person;
};
function Card({ person }: props) {
  const happyPatient = `(${Math.floor((person.happyPatient / person.allPatients) * 100)}%) ${person.happyPatient.toLocaleString()} بیمار راضی`;
  return (
    <div className={styles.card}>
      <img src={person.image} />
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles["doctor-name"]}>{person.name}</div>
          <span className={styles.star}>
            {person.star} <img alt="" src="/images/icons/star.png"></img>
          </span>
        </div>
        <div className={styles.special}>{person.clinicSpecialName}</div>
        <div className={styles.client}>{happyPatient}</div>
        <div className={styles.client}></div>
        <div className={styles.fields}>
          {person.fields.map((field: string) => (
            <button>{field}</button>
          ))}
        </div>
      </div>
      <hr />
      <div className={styles.address}>
        <img alt="" src="/images/icons/balck-location.png"></img>
        {person.address}
      </div>
    </div>
  );
}

export default Card;
