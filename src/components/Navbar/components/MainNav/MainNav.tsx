import styles from "./MainNav.module.css";
import logo from "../../../../../public/images/logo/Logo.png";
import logoNobito from "../../../../../public/images/logo/logoNobito.png";
import logoPlatform from "../../../../../public/images/logo/logoPlatform.png";
import { FaRegBell } from "react-icons/fa";
function MainNav() {
  return (
    <div className={styles["main-nav"]}>
      <div className={styles.menu}>
        <div className={styles["main-logo"]}>
          <img src={logo} alt="" className={styles.logo}></img>
          <img src={logoNobito} alt="" className={styles.nobito}></img>
          <img src={logoPlatform} alt="" className={styles.platform}></img>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">نوبت دهی مطب</a>
            </li>
            <li>
              <a href="#">خدمات</a>
            </li>
            <li>
              <a href="#">مشاوره آنلاین</a>
            </li>
            <li>
              <a href="#">مجله سلامت</a>
            </li>
            <li>
              <a href="#">نیکوکاری </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["main-nav-button"]}>
        <FaRegBell className={styles.bell} />
        <input
          className={styles.loginbtn}
          type="button"
          value={`ورود/ ثبت نام`}
        />
      </div>
    </div>
  );
}

export default MainNav;
