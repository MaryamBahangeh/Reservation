import styles from "./Indicator.module.css";

type Props = {
  onNext: () => void;
  onPrevious: () => void;
};

function Indicator({ onPrevious, onNext }: Props) {
  return (
    <div className={styles.indicator}>
      <button onClick={onPrevious}>
        <img src="/icons/indicator-arrow-right.png" alt="" />
      </button>
      <div className={styles.pages}>
        <div className={styles.line}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <button onClick={onNext}>
        <img src="/icons/indicator-arrow-left.png" alt="" />
      </button>
    </div>
  );
}

export default Indicator;
