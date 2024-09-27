import React from "react";
import styles from "./Footer.module.css";
import AboutUs from "./AboutUs/AboutUs.tsx";
import Content from "./Content/Content.tsx";
import Contact from "./Contact/Contact.tsx";
import logoNobito from "../../../public/images/logo/logoNobito.png";
import logo from "../../../public/images/logo/Logo.png";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <AboutUs />
      <Content />
      <Contact />
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
