// import React from "react";
import styles from "./Feedback.module.css";
import Indicator from "../../components/Indicator/Indicator.tsx";
import feedbacks from "../../assets/data/feedback.json";
import FeedbackCard from "./components/FeedbackCard/FeedbackCard.tsx";
import Message from "../../components/Message/Message.tsx";
function Feedback(props) {
  return (
    <div className={styles.feedback}>
      <div className={styles.container}>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} info={feedback} />
        ))}
      </div>
      <Indicator />
      <div className={styles["message-div"]}>
        <Message />
      </div>
    </div>
  );
}

export default Feedback;
