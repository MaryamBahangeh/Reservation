import styles from "./DoctorCard.module.css";
import Button, { Color, Size, Variant } from "../../Button/Button.tsx";

function DoctorCard() {
  return (
    <div className={styles["doctor-card"]}>
      <div className={styles.title}>
        <div className={styles.doctor}>
          <img
            className={styles.pic}
            alt="doctor-pic"
            src="./images/doctor-card/dr-pic1.png"
          />
          <div className={styles.name}>ناتدا سیبیب</div>
          <div className={styles.speciality}>مننک صثیص</div>
        </div>

        <div className={styles.rate}>
          <div className={styles.percent}>
            <img src="./images/icons/like.png" />
            <span className={styles.percent}>97% پیشنهاد کاربران</span>
          </div>
          <div className={styles.star}>
            <img src="./images/icons/star.png" />
            <span>4.5/5 از (نظر 320)</span>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.content}>
        <span className={styles["service-title"]}>
          خدمات:{" "}
          <span className={styles.subtitle}>
            {" "}
            جراحی مغز/درمان میگرن/عصب شناسی/نورولوژی/ستون فقرات
          </span>{" "}
        </span>
        <div className={styles["types-container"]}>
          <span className={styles["type-title"]}>شیوه نوبت دهی :</span>
          <div className={styles.type}>
            <img src="./images/icons/call.png" />
            <span>گفتگو تلفنی</span>
          </div>

          <div className={styles.type}>
            <img src="./images/icons/online.png" />
            <span>جلسه آنلاین</span>
          </div>

          <div className={styles.type}>
            <img src="./images/icons/building.png" />
            <span>حضوری</span>
          </div>
        </div>
        <div className={styles.options}>
          <span>شاخصه ها :</span>
          <button>سالن انتظار</button>
          <button>آسانسور</button>
          <button>پارکینگ</button>
          <button>تخت بیمار</button>
        </div>

        <div className={styles["working-times"]}>
          <div className={styles.times}>
            <img src="./images/icons/clock.png" />
            <span>ساعت کاری : شنبه تا چهارشنبه 9صبح تا 6 عصر</span>
          </div>
          <div className={styles.success}>
            <img src="./images/icons/tick-circle.png" />
            <span>1232 نوبت موفق در نوبیتو</span>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles["address-container"]}>
        <div className={styles.address}>
          <img src="./images/icons/location.png" />
          <span>نشانی : تهران،بلوار کشاورز،خ فلسطین،کوچه24،ساختمان لاله</span>
        </div>
        <Button variant={Variant.FILL} size={Size.MEDIUM} color={Color.PRIMARY}>
          دریافت نوبت <img src="./images/icons/arrow-left.png" />
        </Button>
      </div>
    </div>
  );
}

export default DoctorCard;
