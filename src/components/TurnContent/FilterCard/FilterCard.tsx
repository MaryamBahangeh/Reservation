import styles from "./FilterCard.module.css";
import { getServices } from "../../../api/service.ts";
import { Service } from "../../../model/service.ts";
import React, { useEffect, useState } from "react";
import { getSpecialities } from "../../../api/speciality.ts";
import { Speciality } from "../../../model/speciality.ts";

type Props = {
  onGenderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSpecialtyChange: (value: Speciality | null) => void;
  onServiceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
};

function FilterCard({
  onGenderChange,
  onSpecialtyChange,
  onServiceChange,
  onReset,
}: Props) {
  const [services, setServices] = useState<Service[]>([]);
  const [specialities, setSpecialities] = useState<Speciality[]>([]);

  const [activeSpeciality, setActiveSpeciality] = useState<Speciality | null>(
    null,
  );

  const specialityChangeHandler = (value: Speciality | null): void => {
    setActiveSpeciality(value);
    onSpecialtyChange(value);
  };

  const resetHandler = (): void => {
    setActiveSpeciality(null);
    onReset();
  };

  useEffect(() => {
    getServices().then((x: Service[]) => setServices(x));
    getSpecialities().then((x: Speciality[]) => setSpecialities(x));
    document.getElementById("bothGender").checked = true;
    document.getElementById("allServices").checked = true;
  }, []);

  return (
    <div className={styles["filter-card"]}>
      <div className={styles.title}>
        <div className={styles.filter}>
          <img src="./images/icons/filter.png" alt="Filter" />
          <span>فیلتر کردن</span>
        </div>
        <button onClick={resetHandler}>حذف فیلترها</button>
      </div>

      <div className={styles.content}>
        <span>شیوه مشاوره پزشکی خود را انتخاب کنید</span>

        <div className={styles.option}>
          <div>
            <button>
              <img src="./images/icons/green-call.png" />
            </button>

            <span className={styles.green + " body-b1-medium"}>تلفنی</span>
          </div>
          <div>
            <button>
              <img src="./images/icons/online-bigsize.png" />
            </button>
            <span className={"body-b1-medium"}>آنلاین</span>
          </div>
          <div>
            <button>
              <img src="./images/icons/bulding-bigsize.png" />
            </button>
            <span className={"body-b1-medium"}>حضوری</span>
          </div>
        </div>
        <div className={styles.line}></div>

        <div className={styles.container}>
          <span>تخصص:</span>
          {specialities.map((item) => (
            <div>
              <input
                type="radio"
                id={`speciality-${item.id}`}
                name="specialities"
                onChange={() => specialityChangeHandler(item)}
                checked={activeSpeciality === item}
              />
              <label htmlFor={`speciality-${item.id}`}>{item.name}</label>
            </div>
          ))}{" "}
          <div>
            <input
              type="radio"
              id="allSpeciality"
              name="specialities"
              onChange={() => specialityChangeHandler(null)}
              checked={activeSpeciality === null}
            />
            <label htmlFor="allSpeciality">همه</label>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <span>خدمات:</span>
          {services.map((item) => (
            <div>
              <input
                type="radio"
                id={"service" + item.id}
                name="services"
                value={item.id}
                onChange={onServiceChange}
              />
              <label htmlFor="service">{item.name}</label>
            </div>
          ))}
          <div>
            <input
              type="radio"
              id="allServices"
              value="0"
              name="services"
              onChange={onServiceChange}
            />
            <label htmlFor="allServices">همه</label>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <span>جنسیت:</span>
          <div>
            <input
              type="radio"
              id="bothGender"
              name="gender"
              value="2"
              onChange={onGenderChange}
            />
            <label htmlFor="both">هر دو</label>
          </div>

          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="1"
              onChange={onGenderChange}
            />
            <label htmlFor="female">زن</label>
          </div>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="0"
              onChange={onGenderChange}
            />
            <label htmlFor="male">مرد</label>
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
