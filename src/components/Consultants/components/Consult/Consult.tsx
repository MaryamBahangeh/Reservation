import styles from "./Consult.module.css";
import { Consultant } from "../../../../model/consultant.ts";

function Consult({ consultant }: { consultant: Consultant }) {
  return (
    <div className={styles.consult}>
      <img src={consultant.image} className={styles.consultpic} />
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles["doctor-name"]}>{consultant.name}</div>
          <span className={styles.star}>{consultant.star}</span>
          <img alt="" src="/icons/star.png"></img>
        </div>
        <div className={styles.special}>{consultant.specialtyName}</div>
      </div>

      <hr />
      <button className={styles.appointment}>دریافت نوبت</button>
    </div>
  );
}

export default Consult;
