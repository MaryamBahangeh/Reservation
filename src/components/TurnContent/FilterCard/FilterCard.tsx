import styles from "./FilterCard.module.css";
function FilterCard() {
  return (
    <div className={styles["filter-card"]}>
      <div className={styles.title}>
        <div className={styles.filter}>
          <img src="./images/icons/filter.png" alt="Filter" />
          <span>فیلتر کردن</span>
        </div>
        <span>حذف فیلترها</span>
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
          <span>خدمات:</span>
          <div>
            <input type="radio" id="test" name="services" value="HTML" />
            <label htmlFor="test">تست ورزش</label>
          </div>

          <div>
            <input type="radio" id="anjo" name="services" value="CSS" />
            <label htmlFor="anjo">آنزوگرافی</label>
          </div>
          <div>
            <input type="radio" id="leyzer" name="services" />
            <label htmlFor="leyzer">لیزر</label>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <span>خدمات:</span>
          <div>
            <input type="radio" id="test" name="services" value="HTML" />
            <label htmlFor="test">تست ورزش</label>
          </div>

          <div>
            <input type="radio" id="anjo" name="services" value="CSS" />
            <label htmlFor="anjo">آنزوگرافی</label>
          </div>
          <div>
            <input type="radio" id="leyzer" name="services" />
            <label htmlFor="leyzer">لیزر</label>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <span>جنسیت:</span>
          <div>
            <input type="radio" id="heart" name="both" value="HTML" />
            <label htmlFor="html">هر دو</label>
          </div>

          <div>
            <input type="radio" id="surgery" name="female" value="CSS" />
            <label htmlFor="css">زن</label>
          </div>
          <div>
            <input type="radio" id="infant" name="male" value="CSS" />
            <label htmlFor="javascript">مرد</label>
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
