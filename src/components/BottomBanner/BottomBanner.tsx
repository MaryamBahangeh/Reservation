// import React from "react";
import styles from "./BottomBanner.module.css";

import BottomBannerCard from "./BottomBannerCard/BottomBannerCard.tsx";
function BottomBanner() {
  return (
    <div className={styles["bottom-banner"]}>
      <div className={styles["main-div"]}>
        <div className={styles.container}>
          <div className={styles["info-div"]}>
            <h2 className={styles.title}>
              بیمه دکترتو در روزهای سخت همراه شماست
            </h2>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
            <button>مطالعه بیشتر</button>
          </div>
          <img src="/images/insurance/insurance.png" className={styles.pic} />
        </div>
        <div className={styles.option}>
          <BottomBannerCard
            title="بیمه دکترتو در روزهای سخت همراه"
            subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است."
            img="/images/insurance/insurance-icon.png"
          />
          <BottomBannerCard
            title="بیمه دکترتو در روزهای سخت همراه"
            subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است."
            img="/images/insurance/insurance-icon.png"
          />
          <BottomBannerCard
            title="بیمه دکترتو در روزهای سخت همراه"
            subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است."
            img="/images/insurance/insurance-icon.png"
          />
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;
