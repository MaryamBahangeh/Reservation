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
function FeedbackCard({
  feedbackCardProps,
}: {
  feedbackCardProps: FeedbackCardProps;
}) {
  return (
    <div className={styles["feedback-card"]}>
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
        <img src="/images/icons/like.png" />
        {feedbackCardProps.suggestion}
      </button>
    </div>
  );
}

export default FeedbackCard;
