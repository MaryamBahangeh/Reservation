import styles from "./Statics.module.css";
function Statics() {
  return (
    <div className={styles.statics}>
      <img src="/images/statics/rectangleRight.png" className={styles.fimage} />
      <div className={styles.info}>
        <div>
          <p className={styles.title}>{(30000).toLocaleString()}+</p>
          <p className={styles.subtitle}>پزشک آماده به خدمت</p>
        </div>
        <div>
          <p className={styles.title}>{(10000).toLocaleString()}+</p>
          <p className={styles.subtitle}>درمانگر سیار</p>
        </div>
        <div>
          <p className={styles.title}>{(40000).toLocaleString()}+</p>
          <p className={styles.subtitle}>نوبت دهی روزانه</p>
        </div>
        <div>
          <p className={styles.title}>{(15000).toLocaleString()}+</p>
          <p className={styles.subtitle}>مراکز درمانی</p>
        </div>
      </div>
      <img src="/images/statics/rectangleLeft.png" className={styles.limage} />
    </div>
  );
}

export default Statics;
