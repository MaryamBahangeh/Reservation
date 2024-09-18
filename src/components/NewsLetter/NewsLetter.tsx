import React from "react";
import styles from "./NewsLetter.module.css";

function NewsLetter(props) {
  return (
    <div className={styles["news-letter"]}>
      <div className={styles.news}>
        <div className={styles.imagediv}>
          <img src="images/NewsLetter/image.png" alt="newsletter" />
        </div>

        <p>بیمه های طرف قرارداد نوبیتو</p>
        <img src="images/NewsLetter/Pic.png" alt="newsletter" />
        <img src="images/NewsLetter/Pic1.png" alt="newsletter" />
        <img src="images/NewsLetter/Pic2.png" alt="newsletter" />
        <img src="images/NewsLetter/Pic3.png" alt="newsletter" />
      </div>
    </div>
  );
}

export default NewsLetter;
