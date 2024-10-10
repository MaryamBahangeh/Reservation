// import React from "react";
import styles from "./Feedback.module.css";
import Indicator from "../../components/Indicator/Indicator.tsx";
import feedbacks from "../../assets/data/feedback.json";
import FeedbackCard from "./components/FeedbackCard/FeedbackCard.tsx";
import SmallFeedbackCard from "./components/SmallFeedbackCard/SmallFeedbackCard.tsx";
import FadeFeedbackCard from "./components/FadeFeedbackCard/FadeFeedbackCard.tsx";

import Message from "../../components/Message/Message.tsx";
function Feedback(props) {
  return (
    <div className={styles.feedback}>
      <div className={styles["title-container"]}>
        <hr />
        <div>
          <span>بازخورد </span>بیماران نوبیتو
        </div>
        <hr />
      </div>
      <div className={styles.container}>
        {feedbacks.map((feedback) =>
          ["1", "5"].includes(feedback.id) ? (
            <FadeFeedbackCard />
          ) : ["2", "4"].includes(feedback.id) ? (
            <SmallFeedbackCard key={feedback.id} info={feedback} />
          ) : (
            <FeedbackCard key={feedback.id} info={feedback} />
          ),
        )}
      </div>
      <Indicator />
      <div className={styles["message-div"]}>
        <Message />
      </div>
    </div>
  );
}

export default Feedback;
