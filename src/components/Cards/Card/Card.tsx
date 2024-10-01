import styles from "./Card.module.css";
import React from "react";
function Card({ person }) {
  return (
    <div className={styles.card}>
      <img src={person.image} />

      <div className={styles.info}>
        <div className={styles.name}>
          <p className={styles["doctor-name"]}>{person.name}</p>
          <p className={styles.star}>
            {person.star} <img alt="" src="/images/icons/star.png"></img>
          </p>
        </div>
        <p className={styles.special}>{person.clinicSpecialName}</p>
        <p className={styles.client}> {person.happyPatient}بیمار راضی </p>
        <div className={styles.fields}>
          {person.fields.map((field: string) => (
            <button>{field}</button>
          ))}
        </div>
      </div>

      <hr />
      <p className={styles.address}>
        <img alt="" src="/images/icons/balck-location.png"></img>
        {person.address}
      </p>
    </div>
  );
}

export default Card;
