import styles from "./FilterCard.module.css";
import { getServices } from "../../../api/service.ts";
import { Service } from "../../../model/service.ts";
import React, { useEffect, useState } from "react";
import { getSpecialities } from "../../../api/speciality.ts";
import { Speciality } from "../../../model/speciality.ts";

type Props = {
  onGenderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSpecialtyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onServiceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FilterCard({
  onGenderChange,
  onSpecialtyChange,
  onServiceChange,
}: Props) {
  const [services, setServices] = useState<Service[]>([]);
  const [speciality, setSpeciality] = useState<Speciality[]>([]);

  useEffect(() => {
    getServices().then((x: Service[]) => setServices(x));
    getSpecialities().then((x: Speciality[]) => setSpeciality(x));
    document.getElementById("allSpeciality").checked = true;
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
        <button>حذف فیلترها</button>
      </div>

      <div className={styles.content}>
        <span>شیوه مشاوره پزشکی خود را انتخاب کنید</span>

        <div className={styles.option}>
          <div>
            <img src="./images/icons/green-call.png" />
            <span>تلفنی</span>
          </div>
          <div>
            <img src="./images/icons/online-bigsize.png" />
            <span>آنلاین</span>
          </div>
          <div>
            <img src="./images/icons/bulding-bigsize.png" />
            <span>حضوری</span>
          </div>
        </div>
        <div className={styles.line}></div>

        <div className={styles.container}>
          <span>تخصص:</span>
          {speciality.map((item: Speciality) => (
            <div>
              <input
                type="radio"
                id="speciality"
                name="specialities"
                value={item.id}
                onChange={onSpecialtyChange}
              />
              <label htmlFor="speciality">{item.name}</label>
            </div>
          ))}{" "}
          <div>
            <input
              type="radio"
              id="allSpeciality"
              value="0"
              name="specialities"
              onChange={onSpecialtyChange}
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
