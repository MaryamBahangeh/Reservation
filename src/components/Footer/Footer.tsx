import React from "react";
import styles from "./Footer.module.css";
import AboutUs from "./components/AboutUs/AboutUs.tsx";
import Content from "./components/Content/Content.tsx";
import Contact from "./components/Contact/Contact.tsx";
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <AboutUs />
      <Content />
      <Contact />
      <div className={styles.social}>
        <div>
          <img className={styles.icons} src="/images/icons/copy.png" />
          <span>تمامی حقوق این وبسایت متعلق به شرکت نوبیتو است</span>
        </div>
        <div className={styles["social-icons"]}>
          <FaLinkedin className={styles.icons} />
          <FaInstagram className={styles.icons} />
          <FaTelegram className={styles.icons} />
          <FaYoutube className={styles.icons} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
