import React from "react";
import styles from "./Title.module.css";
function Title({ title }) {
  return (
    <div>
      <div className={styles.favorite}>
        <p>{title}</p>
        <hr className={styles.hr} />
        <p>مشاهده همه</p>
      </div>
    </div>
  );
}

export default Title;
