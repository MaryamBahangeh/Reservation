import React from "react";
import styles from "./FadeFeedbackCard.module.css";

function FadeFeedbackCard(props) {
  return (
    <div className={styles["fade-feedback-card"]}>
      <img src="/images/feedback/person-fade.png" />
    </div>
  );
}

export default FadeFeedbackCard;
