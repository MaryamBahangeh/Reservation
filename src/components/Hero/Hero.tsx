import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.header}>
      <div className={styles.background}>
        <img src="/images/hero/background2.png" />
        <img src="/images/hero/background1.png" />
      </div>

      <div className={styles.title}>
        <img
          className={styles["quotaion-start"]}
          src="/images/hero/quotaion-start.png"
        />
        <p>تلاش ما دسترسی سریعتر و آسان تر شما به خدمات پزشکی است :)</p>
        <img
          className={styles["quotaion-end"]}
          src="/images/hero/quotaion-end.png"
        />
      </div>

      <div className={styles.subtitle}>
        <p>کافیست خدمات درمانی موردنظر خود را جستجو کنید</p>
        <p>(دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)</p>
      </div>
      <div className={styles.search}>
        <img
          className={styles["search-icon"]}
          alt="search"
          src="/images/icons/search-normal.png"
        />
        <input type="text" placeholder="جستجو پزشک،درمانگر،کلینیک..." />
        <button>
          <img alt="location" src="/images/icons/green-location.png" />
          انتخاب شهر
        </button>
      </div>
    </div>
  );
}

export default Hero;
