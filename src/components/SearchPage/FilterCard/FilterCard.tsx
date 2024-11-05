import styles from "./FilterCard.module.css";
import { getServices } from "../../../api/service.ts";
import { Service } from "../../../model/service.ts";
import { useEffect, useState } from "react";
import { getSpecialities } from "../../../api/speciality.ts";
import { Speciality } from "../../../model/speciality.ts";
import { Gender } from "../../../enums/gender.ts";
import RadioList from "../../RadioList/RadioList.tsx";

type Props = {
  activeService: Service | null;
  activeSpeciality: Speciality | null;
  activeGender: Gender | null;
  onGenderChange: (item: Gender | null) => void;
  onSpecialtyChange: (item: Speciality | null) => void;
  onServiceChange: (item: Service | null) => void;
  onReset: () => void;
};

function FilterCard({
  activeService,
  activeSpeciality,
  activeGender,
  onGenderChange,
  onSpecialtyChange,
  onServiceChange,
  onReset,
}: Props) {
  const [services, setServices] = useState<Service[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);

  useEffect(() => {
    getServices().then((x: Service[]) => setServices(x));
    getSpecialities().then((x: Speciality[]) => setSpecialities(x));
  }, []);

  return (
    <div className={styles["filter-card"]}>
      <div className={styles.title}>
        <div className={styles.filter}>
          <img src="./icons/filter.png" alt="Filter" />
          <span>فیلتر کردن</span>
        </div>
        <button onClick={onReset}>حذف فیلترها</button>
      </div>

      <div className={styles.content}>
        <span>شیوه مشاوره پزشکی خود را انتخاب کنید</span>

        <div className={styles.option}>
          <div>
            <button>
              <img className={styles.call} src="./icons/call-calling.svg" />
            </button>

            <span className={styles.green + " body-b1-medium"}>تلفنی</span>
          </div>
          <div>
            <button>
              <img src="./icons/online.svg" />
            </button>
            <span className={"body-b1-medium"}>آنلاین</span>
          </div>
          <div>
            <button>
              <img src="./icons/hospital.svg" />
            </button>
            <span className={"body-b1-medium"}>حضوری</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <RadioList
          items={specialities}
          radioGroupName={"specialities"}
          radioListCaption={"تخصص"}
          activeItem={activeSpeciality}
          onChange={onSpecialtyChange}
        />

        <div className={styles.line}></div>

        <RadioList
          items={services}
          radioGroupName={"services"}
          radioListCaption={"خدمات:"}
          activeItem={activeService}
          onChange={onServiceChange}
        />

        <div className={styles.line}></div>
        <div className={styles.container}>
          <span>جنسیت:</span>
          <div>
            <input
              type="radio"
              id="bothGender"
              name="gender"
              checked={activeGender === null}
              onChange={() => onGenderChange(null)}
            />
            <label htmlFor="bothGender">هر دو</label>
          </div>

          <div>
            <input
              type="radio"
              id="gender-female"
              name="gender"
              value={Gender.FEMALE}
              onChange={() => onGenderChange(Gender.FEMALE)}
              checked={activeGender === Gender.FEMALE}
            />
            <label htmlFor="gender-female">زن</label>
          </div>
          <div>
            <input
              type="radio"
              id="gender-male"
              name="gender"
              value={Gender.MALE}
              checked={activeGender === Gender.MALE}
              onChange={() => onGenderChange(Gender.MALE)}
            />
            <label htmlFor="gender-male">مرد</label>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.calendar}>
          <span>تعین روز نوبت :</span>
          <div className={styles.date}>
            <input placeholder="از تاریخ" />
            <input placeholder="تا تاریخ" />
          </div>
        </div>
        <div className={styles["data-container"]}>
          <span>امکانات مطب :</span>
          <div className={styles.facility}>
            <button>سالن انتظار</button>
            <button>آسانسور</button>
            <button>پارکینگ</button>
            <button>تخت بیمار</button>
            <button>ویلچر</button>
            {/*<button>نیروی خدماتی</button>*/}
            {/*<button>کمترین معطلی</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
