import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs(props) {
  return (
    <div className={styles.about}>
      <div className={styles["logo-div"]}>
        <img
          src="/images/logo/logo-bigsize.png"
          alt=""
          className={styles.logo}
        ></img>
        <img
          src="/images/logo/nobito-bigsize.png"
          alt=""
          className={styles.nobito}
        ></img>
      </div>
      <div>
        <h1 className={styles.title}>
          تلاش ما دسترسی آسان تر شما به خدمات پزشکی است
        </h1>
        <p className={styles.subtitle}>
          با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به عنوان
          یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین، خدمات
          مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه می‌دهیم. از
          اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری، همه چیز در
          اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه دهیم.تمام تلاش
          و سعی ما بر این باور است که دغدغه های دسترسی و درمان را برای بیماران و
          همراهانشان کمتر کنیم،امیدواریم نوبیتو در روزهای ناخوش احوالی همراه و
          همیار شما باشد.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
