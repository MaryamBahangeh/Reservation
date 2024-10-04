import styles from "./Statics.module.css";
function Statics() {
  return (
    <div className={styles.statics}>
      <img
        src="/images/statics/rectangle-right.png"
        className={styles.fimage}
      />
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{(30000).toLocaleString()}+</div>
          <div className={styles.subtitle}>پزشک آماده به خدمت</div>
        </div>
        <div>
          <div className={styles.title}>{(10000).toLocaleString()}+</div>
          <div className={styles.subtitle}>درمانگر سیار</div>
        </div>
        <div>
          <div className={styles.title}>{(40000).toLocaleString()}+</div>
          <p className={styles.subtitle}>نوبت دهی روزانه</p>
        </div>
        <div>
          <div className={styles.title}>{(15000).toLocaleString()}+</div>
          <div className={styles.subtitle}>مراکز درمانی</div>
        </div>
      </div>
      <img src="/images/statics/rectangle-left.png" className={styles.limage} />
    </div>
  );
}

export default Statics;
