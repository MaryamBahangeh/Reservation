import styles from "./Hero.module.css";
import Search from "../Search/Search.tsx";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <img src="/images/hero/background1.png" />
        <img src="/images/hero/background2.png" />
      </div>

      <div className={styles.title}>
        <img
          className={styles["quotaion-start"]}
          src="/images/hero/quotaion-start.png"
        />
        <div>تلاش ما دسترسی سریعتر و آسان تر شما به خدمات پزشکی است :)</div>
        <img
          className={styles["quotaion-end"]}
          src="/images/hero/quotaion-end.png"
        />
      </div>

      <div className={styles.subtitle}>
        <div>کافیست خدمات درمانی موردنظر خود را جستجو کنید</div>
        <div>(دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)</div>
      </div>
      <Search className={styles.search} />
    </div>
  );
}

export default Hero;
