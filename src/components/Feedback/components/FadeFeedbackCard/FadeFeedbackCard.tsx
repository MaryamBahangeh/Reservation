import styles from "./FadeFeedbackCard.module.css";
function FadeFeedbackCard() {
  return (
    <div className={styles["fade-feedback-card"]}>
      <img alt="image" src="/images/feedback/person-fade.png" />
    </div>
  );
}

export default FadeFeedbackCard;
