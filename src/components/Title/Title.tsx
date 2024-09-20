import React from "react";
import styles from "./Title.module.css";

type Props = {
  prefix?: string;
  main: string;
  suffix?: string;
};

function Title({ prefix, main, suffix }: Props) {
  return (
    <div>
      <div className={styles.favorite}>
        <p>
          {prefix}
          <span className={styles.highlight}>{main}</span>
          {suffix}
        </p>
        <hr className={styles.hr} />
        <p>مشاهده همه</p>
      </div>
    </div>
  );
}

export default Title;
