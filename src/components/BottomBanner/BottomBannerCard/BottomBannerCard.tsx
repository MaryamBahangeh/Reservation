import React from "react";
import styles from "./BottomBannerCard.module.css";
function BottomBannerCard({ title, subtitle, img }) {
  return (
    <div className={styles["bottom-banner-card"]}>
      <img src={img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default BottomBannerCard;
