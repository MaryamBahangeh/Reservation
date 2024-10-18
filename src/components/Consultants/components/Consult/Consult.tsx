import styles from "./Consult.module.css";
import { Consultant } from "../../../../models/consultant.ts";

function Consult({ consultant }: { consultant: Consultant }) {
  return (
    <div className={styles.consult}>
      <img src={consultant.image} className={styles.consultpic} />
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles["doctor-name"]}>{consultant.name}</div>
          <span className={styles.star}>{consultant.star}</span>
          <img alt="" src="/images/icons/star.png"></img>
        </div>
        <div className={styles.special}>{consultant.specialtyid}</div>
        {/*<div className={styles.fields}>*/}
        {/*  {person.fields.map((field) => (*/}
        {/*    <button>{field}</button>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>

      <hr />
      <button className={styles.appointment}>دریافت نوبت</button>
    </div>
  );
}

export default Consult;
