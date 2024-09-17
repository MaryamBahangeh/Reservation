import styles from "./InfoNav.module.css";
import {
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
  FaMapMarker,
} from "react-icons/fa";
function InfoNav() {
  return (
    <div className={styles.infoNav}>
      <div className={styles.social}>
        <FaInstagram className={styles.icons} />
        <FaTelegram className={styles.icons} />
        <FaYoutube className={styles.icons} />
        <FaLinkedin className={styles.icons} />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">سوالات متداول</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaMapMarker /> + انتخاب آدرس
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InfoNav;
