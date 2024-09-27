// import React from "react";
import styles from "./BannerCard.module.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
type props = {
  isPrimary: boolean;
  title: string;
  description: string;
  btnText: string;
  img: string;
};
function BannerCard({ isPrimary, title, description, btnText, img }: props) {
  return (
    <div className={styles["banner-card"]}>
      <div
        className={`${styles.container} ${isPrimary ? styles.primary : styles.secondary}`}
      >
        <div className={styles["info-div"]}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{description}</p>
          <button>
            {btnText}
            <HiOutlineArrowCircleLeft className={styles.arrow} />
          </button>
        </div>
        <img src={img} className={styles.pic} />
      </div>
    </div>
  );
}
export default BannerCard;
