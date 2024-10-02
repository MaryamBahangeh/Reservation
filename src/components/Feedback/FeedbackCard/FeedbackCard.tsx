import React from "react";
import styles from "./FeedbackCard.module.css";

function FeedbackCard({ info }: object) {
  return (
    <div className={styles["feedback-card"]}>
      <div className={styles.info}>
        <div className={styles.person}>
          <img className={styles.img} src={info.image} />
          <div className={styles.name}>{info.name}</div>
          <p className={styles.date}>{info.date}</p>
        </div>
        <span className={styles.rate}>
          {info.star} <img src="/images/icons/star.png" />
        </span>
      </div>

      <p className={styles.date}>{info.desc}</p>
      <button>
        <img src="/images/icons/like.png" />
        {info.suggestion}
      </button>
    </div>
  );
}

export default FeedbackCard;
