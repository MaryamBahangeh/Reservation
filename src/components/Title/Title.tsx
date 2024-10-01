import React from "react";
import styles from "./Title.module.css";
export type titleProps = {
  prefix?: string;
  main: string;
  suffix?: string;
};
function Title({ prefix, main, suffix }: titleProps) {
  return (
    <div className={styles.favorite}>
      <p className={styles["title-text"]}>
        {prefix}
        <span>{main}</span>
        {suffix}
      </p>
      <hr className={styles.hr} />
      <p className={styles["subtitle-text"]}>
        مشاهده همه <img alt="" src="/images/icons/arrow-left-grey.png"></img>
      </p>
    </div>
  );
}

export default Title;
