import React from "react";
import styles from "./BottomBanner.module.css";

import BannerCard from "../Banner/components/BannerCard/BannerCard.tsx";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import BottomBannerCard from "./BottomBannerCard/BottomBannerCard.tsx";
function BottomBanner(props) {
  return (
    <div className={styles["bottom-banner"]}>
      <div className={styles.container}>
        <div className={styles["info-div"]}>
          <p className={styles.title}>بیمه دکترتو در روزهای سخت همراه شماست</p>
          <p className={styles.subtitle}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <button>مطالعه بیشتر</button>
        </div>
        <img src="images/Banner/BottomBanner.png" className={styles.pic} />
      </div>

      <div className={styles.option}>
        <BottomBannerCard
          title="بیمه دکترتو در روزهای سخت همراه"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است."
          img="images/Insurance/icon.png"
        />
        <BottomBannerCard
          title="بیمه دکترتو در روزهای سخت همراه"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است."
          img="images/Insurance/icon.png"
        />
        <BottomBannerCard
          title="بیمه دکترتو در روزهای سخت همراه"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است."
          img="images/Insurance/icon.png"
        />
      </div>
    </div>
  );
}

export default BottomBanner;
