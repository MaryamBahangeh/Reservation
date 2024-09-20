import React from "react";
import styles from "./FeedbackCard.module.css";
import { FaStar } from "react-icons/fa";

function FeedbackCard({ info }) {
  return (
    <div className={styles["feedback-card"]}>
      <div className={styles.info}>
        <div className={styles.person}>
          <img className={styles.img} src={info.image} />
          <p className={styles.name}>{info.name}</p>
          <p className={styles.date}>{info.date}</p>
        </div>
        <p className={styles.rate}>
          {info.star} <FaStar className={styles.star} />
        </p>
      </div>

      <p className={styles.date}>{info.desc}</p>
      <button className={styles.suggest}>{info.suggestion}</button>
    </div>
  );
}

export default FeedbackCard;
