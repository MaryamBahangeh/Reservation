import styles from "./Indicator.module.css";

type Props = {
  onPrevious: () => void;
  onNext: () => void;
};

function Indicator({ onPrevious, onNext }: Props) {
  return (
    <div className={styles.indicator}>
      <button onClick={onPrevious}>
        <img src="/images/feedback/arrow-right.png" alt="" />
      </button>
      <img className={styles.pages} src="/images/feedback/pages.png" alt="" />
      <button onClick={onNext}>
        <img src="/images/feedback/arrow-left.png" alt="" />
      </button>
    </div>
  );
}

export default Indicator;
