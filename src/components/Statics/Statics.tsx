import rec6 from "../../../public/images/statics/rectangleRight.png";
import rec7 from "../../../public/images/statics/rectangleLeft.png";
import styles from "./Statics.module.css";
function Statics() {
  return (
    <div className={styles.statics}>
      <img src={rec6} className={styles.fimage} />
      <div className={styles.info}>
        <div>
          <p>+3000</p>
          <p>پزشک آماده به خدمت</p>
        </div>
        <div>
          <p> +10000</p>
          <p>درمانگر سیار</p>
        </div>
        <div>
          <p>+3000</p>
          <p>پزشک آماده به خدمت</p>
        </div>
        <div>
          <p> +10000</p>
          <p>درمانگر سیار</p>
        </div>
      </div>
      <img src={rec7} className={styles.limage} />
    </div>
  );
}

export default Statics;
