// import React from "react";
import styles from "./BannerCard.module.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

function BannerCard({ bannerInfo }) {
  return (
    <div className={styles["banner-card"]}>
      <div
        className={styles.container}
        style={{ backgroundColor: `${bannerInfo.bgColor}` }}
      >
        <div className={styles["info-div"]}>
          <p className={styles.title}>{bannerInfo.title}</p>
          <p className={styles.subtitle}>{bannerInfo.description}</p>
          <button style={{ width: `${bannerInfo.btnSize}` }}>
            {bannerInfo.btnText}
            <HiOutlineArrowCircleLeft className={styles.arrow} />
          </button>
        </div>
        <img src={bannerInfo.img} className={styles.pic} />
      </div>
    </div>
  );
}

export default BannerCard;
