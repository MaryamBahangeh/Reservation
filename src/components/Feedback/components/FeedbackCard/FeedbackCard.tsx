import React from "react";
import styles from "./FeedbackCard.module.css";

export type FeedbackCardProps = {
  id: string;
  name: string;
  star: string;
  date: string;
  desc: string;
  image: string;
  suggestion: string;
};
function FeedbackCard({ info }: FeedbackCardProps) {
  return (
    <div className={styles["feedback-card"]}>
      <div className={styles.info}>
        <div className={styles.person}>
          <img className={styles.img} src={info.image} />
          <div className={styles.name}>{info.name}</div>
          <div className={styles.date}> تاریخ: {info.date}</div>
        </div>
        <span className={styles.rate}>
          {info.star} <img src="/images/icons/star.png" />
        </span>
      </div>

      <p>{info.desc}</p>
      <button>
        <img src="/images/icons/like.png" />
        {info.suggestion}
      </button>
    </div>
  );
}

export default FeedbackCard;
