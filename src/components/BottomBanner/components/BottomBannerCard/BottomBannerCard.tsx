// import React from "react";
import styles from "./BottomBannerCard.module.css";
type props = {
  title: string;
  subtitle: string;
  img: string;
};
function BottomBannerCard({ title, subtitle, img }: props) {
  return (
    <div className={styles["bottom-banner-card"]}>
      <img alt="" src={img} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

export default BottomBannerCard;
