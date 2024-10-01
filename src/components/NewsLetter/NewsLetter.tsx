import React from "react";
import styles from "./NewsLetter.module.css";

function NewsLetter(props) {
  return (
    <div className={styles["news-letter"]}>
      <div className={styles.imagediv}>
        <img src="/images/NewsLetter/image.png" alt="newsletter" />
      </div>
      <p>بیمه های طرف قرارداد نوبیتو</p>
      <img src="/images/newsletter/pic.png" alt="newsletter" />
      <img src="/images/newsletter/pic1.png" alt="newsletter" />
      <img src="/images/newsletter/pic2.png" alt="newsletter" />
      <img src="/images/newsletter/pic3.png" alt="newsletter" />
      <img src="/images/newsletter/pic4.png" alt="newsletter" />
    </div>
  );
}

export default NewsLetter;
