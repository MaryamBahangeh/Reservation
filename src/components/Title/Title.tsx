import styles from "./Title.module.css";
export type titleProps = {
  prefix?: string;
  main: string;
  suffix?: string;
};
function Title({ prefix, main, suffix }: titleProps) {
  return (
    <div className={styles.favorite}>
      <h2 className={styles["title-text"]}>
        {prefix}
        <span>{main}</span>
        {suffix}
      </h2>
      <hr className={styles.hr} />
      <div className={styles["subtitle-text"]}>
        مشاهده همه <img alt="" src="/images/icons/arrow-left-grey.png"></img>
      </div>
    </div>
  );
}

export default Title;
