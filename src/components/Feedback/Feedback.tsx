import styles from "./Feedback.module.css";
import Indicator from "../../components/Indicator/Indicator.tsx";
import feedbacks from "../../assets/data/feedback.json";
import FeedbackCard from "./components/FeedbackCard/FeedbackCard.tsx";
import SmallFeedbackCard from "./components/SmallFeedbackCard/SmallFeedbackCard.tsx";
import FadeFeedbackCard from "./components/FadeFeedbackCard/FadeFeedbackCard.tsx";

function Feedback() {
  return (
    <div className={styles.feedback}>
      <div className={styles["title-container"]}>
        <hr />
        <h2>
          <span>بازخورد </span>بیماران نوبیتو
        </h2>
        <hr />
      </div>
      <div className={styles.container}>
        {feedbacks.map((feedback) =>
          ["1", "5"].includes(feedback.id) ? (
            <FadeFeedbackCard />
          ) : ["2", "4"].includes(feedback.id) ? (
            <SmallFeedbackCard key={feedback.id} feedbackCardProps={feedback} />
          ) : (
            <FeedbackCard key={feedback.id} feedbackCardProps={feedback} />
          ),
        )}
      </div>
      <Indicator />
    </div>
  );
}

export default Feedback;
