import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={styles["newsletter-main"]}>
      <div className={styles["news-letter"]}>
        <div className={styles.imagediv}>
          <img src="/images/newsletter/insurance-person.png" alt="newsletter" />
        </div>
        <div className={styles.title}>بیمه های طرف قرارداد نوبیتو</div>
        <img src="/images/newsletter/insurance-logo1.png" alt="newsletter" />
        <img src="/images/newsletter/insurance-logo2.png" alt="newsletter" />
        <img src="/images/newsletter/insurance-logo3.png" alt="newsletter" />
        <img src="/images/newsletter/insurance-logo4.png" alt="newsletter" />
        <img src="/images/newsletter/insurance-logo5.png" alt="newsletter" />
      </div>
    </div>
  );
}

export default NewsLetter;
