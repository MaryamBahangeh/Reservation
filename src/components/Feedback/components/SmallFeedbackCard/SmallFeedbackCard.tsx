import styles from "./SmallFeedbackCard.module.css";
import { FeedbackCardProps } from "../FeedbackCard/FeedbackCard.tsx";

function SmallFeedbackCard({
  feedbackCardProps,
}: {
  feedbackCardProps: FeedbackCardProps;
}) {
  return (
    <div className={styles["small-feedback-card"]}>
      <div className={styles.info}>
        <div className={styles.person}>
          <img className={styles.img} src={feedbackCardProps.image} />
          <div className={styles.name}>{feedbackCardProps.name}</div>
          <div className={styles.date}> تاریخ: {feedbackCardProps.date}</div>
        </div>
        <span className={styles.rate}>
          {feedbackCardProps.star} <img src="/images/icons/star.png" />
        </span>
      </div>

      <p>{feedbackCardProps.desc}</p>
      <button>
        <img src="/images/icons/like-small.png" />
        {feedbackCardProps.suggestion}
      </button>
    </div>
  );
}

export default SmallFeedbackCard;
