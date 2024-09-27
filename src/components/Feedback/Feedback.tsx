// import React from "react";
import styles from "./Feedback.module.css";
import feedbacks from "../../assets/data/feedback.json";
import FeedbackCard from "./FeedbackCard/FeedbackCard.tsx";
function Feedback(props) {
  return (
    <div className={styles.feedback}>
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} info={feedback} />
      ))}
    </div>
  );
}

export default Feedback;
