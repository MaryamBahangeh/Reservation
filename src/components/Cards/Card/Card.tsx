import styles from "./Card.module.css";
import React from "react";
function Card({ person }) {
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
        <div className={styles.client}> {person.happyPatient}بیمار راضی </div>
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
