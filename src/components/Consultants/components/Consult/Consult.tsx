import styles from "./Consult.module.css";

export type Person = {
  ID: string;
  name: string;
  star: string;
  specialtyid: string;
  image: string;
};
function Consult({ person }: { person: Person }) {
  return (
    <div className={styles.consult}>
      <img src={person.image} className={styles.consultpic} />
      <div className={styles.info}>
        <div className={styles.name}>
          <div className={styles["doctor-name"]}>{person.name}</div>
          <span className={styles.star}>{person.star}</span>
          <img alt="" src="/images/icons/star.png"></img>
        </div>
        <div className={styles.special}>{person.specialtyid}</div>
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
