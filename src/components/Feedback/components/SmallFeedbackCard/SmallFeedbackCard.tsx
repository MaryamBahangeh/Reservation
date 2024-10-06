import React from "react";
import styles from "./SmallFeedbackCard.module.css";
import { FeedbackCardProps } from "../FeedbackCard/FeedbackCard.tsx";

function SmallFeedbackCard({ info }: FeedbackCardProps) {
  return (
    <div className={styles["small-feedback-card"]}>
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
        <img src="/images/icons/like-small.png" />
        {info.suggestion}
      </button>
    </div>
  );
}

export default SmallFeedbackCard;
