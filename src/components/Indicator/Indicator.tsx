import React from "react";
import styles from "./Indicator.module.css";
function Indicator(props) {
  return (
    <div className={styles.indicator}>
      <img src="/images/feedback/arrow-right.png" alt="" />{" "}
      <img className={styles.pages} src="/images/feedback/pages.png" alt="" />
      <img src="/images/feedback/arrow-left.png" alt="" />
    </div>
  );
}

export default Indicator;
