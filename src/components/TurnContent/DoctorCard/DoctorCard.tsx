import styles from "./DoctorCard.module.css";
import Button, { Color, Size, Variant } from "../../Button/Button.tsx";
import { Person } from "../../../model/person.ts";

function DoctorCard({ person }: { person: Person }) {
  const getServiceNames = (person: Person) => {
    let serviceNames = "";
    for (let i = 0; i < person.services.length; i++) {
      serviceNames = serviceNames.concat(person.services[i].name) + "/ ";
    }
    return serviceNames.substring(0, serviceNames.length - 2);
  };
  return (
    <div className={styles["doctor-card"]}>
      <div className={styles.title}>
        <div className={styles.doctor}>
          <img className={styles.pic} alt="doctor-pic" src={person.image} />
          <div className={styles.name}>{person.name}</div>
          <div className={styles.speciality}>{person.specialtyName}</div>
        </div>

        <div className={styles.rate}>
          <div className={styles.percent}>
            <img src="./images/icons/like.png" />
            <span className={styles.percent}>
              {Math.ceil((person.happyPatients / person.allPatients) * 100)}%
              پیشنهاد کاربران
            </span>
          </div>
          <div className={styles.star}>
            <img src="./images/icons/star.png" />
            <span>
              {person.star}/5 از (نظر {person.allPatients})
            </span>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.content}>
        <span className={styles["service-title"]}>
          خدمات:{" "}
          <span className={styles.subtitle}>{getServiceNames(person)}</span>{" "}
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
