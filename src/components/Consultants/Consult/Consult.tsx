import styles from ".//Consult.module.css";
import React from "react";

function Consult({ person }) {
  return (
    <div className={styles.consult}>
      <img src={person.image} className={styles.consultpic} />
      <div className={styles.info}>
        <div className={styles.name}>
          <p className={styles["doctor-name"]}>{person.name}</p>
          <p className={styles.star}>
            {person.star} <img alt="" src="/images/icons/star.png"></img>
          </p>
        </div>
        <p className={styles.special}>{person.specialName}</p>

        <div className={styles.fields}>
          {person.fields.map((field) => (
            <button>{field}</button>
          ))}
        </div>
      </div>

      <hr />
      <button className={styles.appointment}>دریافت نوبت</button>
    </div>
  );
}

export default Consult;
