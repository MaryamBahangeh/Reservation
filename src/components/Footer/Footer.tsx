import React from "react";
import styles from "./Footer.module.css";

import logoNobito from "../../assets/logoNobito.png";
import logo from "../../assets/Logo.png";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.about}>
        <div className={styles["logo-div"]}>
          <img src={logo} alt="" className={styles.logo}></img>
          <img src={logoNobito} alt="" className={styles.nobito}></img>
        </div>
        <div>
          <div className={styles.title}>
            تلاش ما دسترسی آسان تر شما به خدمات پزشکی است
          </div>
          <div className={styles.subtitle}>
            با افتخار به شما پلتفرم نوبیتو را معرفی میکنیم. ما با افتخار به
            عنوان یک پلتفرم جامع ارائه دهنده خدمات پزشکی مثل نوبت‌دهی آنلاین،
            خدمات مشاوره حضوری و غیرحضوری و خدمات پزشکی در منزل را ارائه
            می‌دهیم. از اختصاص نوبت‌های پزشکی تا امکان مشاوره آنلاین و حضوری،
            همه چیز در اینجاست تا به شما یک تجربه درمانی راحت و بی دردسر ارائه
            دهیم.تمام تلاش و سعی ما بر این باور است که دغدغه های دسترسی و درمان
            را برای بیماران و همراهانشان کمتر کنیم،امیدواریم نوبیتو در روزهای
            ناخوش احوالی همراه و همیار شما باشد.
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <nav className={styles["menu-footer"]}>
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
          <p>خبرنامه</p>
          <p>برای اینکه از جدیدترین اخبار نوبیتو جا نمونید...</p>
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
          <p>تلاش ما ارائه بهترین خدمات ممکن به شما همراهان نوبیتو است.</p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.communication}>
          <div>
            <img src="images/communications/call.png" />
            <p>تماس با پشتیبانی : ۱۲۳۴۵۶۷۸-۰۲۱ | ۱۲۳۴۵۶۷۸-۰۲۱</p>
          </div>
          <div>
            <img src="images/communications/sms.png" />
            <p>نشانی پست الکترونیک : smartix@yahoo.com</p>
          </div>
          <div>
            <img src="images/communications/building.png" />
            <p>
              نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18
            </p>
          </div>
        </div>

        <div className={styles.certificate}>
          <div>
            <img src="images/certificates/cetificate3.png" />
            <img src="images/certificates/cetificate2.png" />
            <img src="images/certificates/cetificate1.png" />
            <img src="images/certificates/cetificate3.png" />
          </div>
          <div>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.social}>
        <div>
          <img className={styles.icons} src="images/copywrite/copy.png" />
          <p>تمامی حقوق این وبسایت متعلق به شرکت نوبیتو است</p>
        </div>

        <div className={styles["social-icons"]}>
          <FaInstagram className={styles.icons} />
          <FaTelegram className={styles.icons} />
          <FaYoutube className={styles.icons} />
          <FaLinkedin className={styles.icons} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
