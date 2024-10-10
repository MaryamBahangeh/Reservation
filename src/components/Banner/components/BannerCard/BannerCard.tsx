// import React from "react";
import styles from "./BannerCard.module.css";
type props = {
  isPrimary: boolean;
  title: string;
  description: string;
  btnText: string;
  img: string;
};
function BannerCard({ isPrimary, title, description, btnText, img }: props) {
  return (
    <div
      className={`${styles.container} ${isPrimary ? styles.primary : styles.secondary}`}
    >
      <div className={styles["info-div"]}>
        <div className={styles.title}>{title}</div>
        <p className={styles.subtitle}>{description}</p>
        <button>
          {btnText}
          <img alt="" src="/images/icons/arrow-left-black.png" />
        </button>
      </div>
      <img alt="" src={img} className={styles.pic} />
    </div>
  );
}

export default BannerCard;
