import styles from "./MainNav.module.css";
import Button, { Color, Size, Variant } from "../../../Button/Button.tsx";

function MainNav() {
  return (
    <div className={styles["main-nav"]}>
      <div className={styles.menu}>
        <img
          src="/images/logo/logo-main.png"
          alt=""
          className={styles.logo}
        ></img>
        <nav>
          <ul>
            <li>
              <a href="#">نوبت دهی مطب</a>
            </li>
            <li>
              <a className={styles["menu-service"]} href="#">
                خدمات <img alt="" src="/images/icons/arrow-down.png"></img>
              </a>
            </li>
            <li>
              <a href="#">مشاوره آنلاین</a>
            </li>
            <li>
              <a href="#">مجله سلامت</a>
            </li>
            <li>
              <a className={styles["red-botton"]} href="#">
                <img src="./images/icons/red-botton.png" /> نیکوکاری
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["main-nav-button"]}>
        <img src="/images/icons/bell.png" />
        {/*<button className={styles.loginbtn}>ورود/ ثبت نام</button>*/}
        <Button variant={Variant.FILL} color={Color.PRIMARY} size={Size.MEDIUM}>
          ورود/ ثبت نام
        </Button>
      </div>
    </div>
  );
}

export default MainNav;
