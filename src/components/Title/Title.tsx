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
      <p>
        {prefix}
        <span>{main}</span>
        {suffix}
      </p>
      <hr className={styles.hr} />
      <p>مشاهده همه</p>
    </div>
  );
}

export default Title;
