import React from "react";
import styles from "./NewsLetter.module.css";

function NewsLetter(props) {
  return (
    <div className={styles["news-letter"]}>
      <div className={styles.imagediv}>
        <img src="/images/news-letter/image.png" alt="newsletter" />
      </div>
      <p>بیمه های طرف قرارداد نوبیتو</p>
      <img src="/images/news-letter/pic.png" alt="newsletter" />
      <img src="/images/news-letter/pic1.png" alt="newsletter" />
      <img src="/images/news-letter/pic2.png" alt="newsletter" />
      <img src="/images/news-letter/pic3.png" alt="newsletter" />
      <img src="/images/news-letter/pic4.png" alt="newsletter" />
    </div>
  );
}

export default NewsLetter;
