import React from "react";
import styles from "./Message.module.css";
function Message(props) {
  return (
    <div className={styles.message}>
      <img src="/images/message/message.png" alt="message" />
    </div>
  );
}

export default Message;
