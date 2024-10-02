import React from "react";
import styles from "./Content.module.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
function Content(props) {
  return (
    <div className={styles.content}>
      <nav className={styles["menu-content"]}>
        <div>
          <ul>
            <li>
              <a href="#">نوبیتو</a>
            </li>
            <li>
              <a href="#">سوالات متداول</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">میثاق نام</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">خدمات</a>
            </li>
            <li>
              <a href="#">خدمات پزشکی در منزل</a>
            </li>
            <li>
              <a href="#">مشاوره غیرحضوری</a>
            </li>
            <li>
              <a href="#">مراکز درمانی</a>
            </li>
            <li>
              <a href="#">نوبت دهی</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">نیکوکاری</a>
            </li>
            <li>
              <a href="#">درمانگر داوطلب</a>
            </li>
            <li>
              <a href="#">بیشتر بدانید</a>
            </li>
            <li>
              <a href="#">کمک مالی</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">پشتیبانی</a>
            </li>
            <li>
              <a href="#">شبکه های اجتماعی</a>
            </li>
            <li>
              <a href="#">واحد انفورماتیک</a>
            </li>
            <li>
              <a href="#">حریم شخصی</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles["news-letter"]}>
        <h4>خبرنامه</h4>
        <div>برای اینکه از جدیدترین اخبار نوبیتو جا نمونید...</div>
        <div className={styles["div-email"]}>
          <input
            type="email"
            className={styles["email-box"]}
            placeholder="ایمیل خود را اینجا وارد کنید"
          />
          <button className={styles.btn}>
            ارسال
            <HiOutlineArrowCircleLeft className={styles.arrow} />
          </button>
        </div>
        <div>تلاش ما ارائه بهترین خدمات ممکن به شما همراهان نوبیتو است.</div>
      </div>
    </div>
  );
}

export default Content;
