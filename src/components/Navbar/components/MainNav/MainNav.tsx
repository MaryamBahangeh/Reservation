import styles from "./MainNav.module.css";
function MainNav() {
  return (
    <div className={styles["main-nav"]}>
      <div className={styles.menu}>
        <img
          src="/images/logo/logo-main.png"
          alt=""
          className={styles.logo}
        ></img>
        <nav aria-label="primary-navigation">
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
      <div className={styles["main-nav-Button"]}>
        <img src="/images/icons/bell.png" />
        <button className={styles.loginbtn}>ورود/ ثبت نام</button>
      </div>
    </div>
  );
}

export default MainNav;
