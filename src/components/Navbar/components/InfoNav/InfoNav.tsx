import styles from "./InfoNav.module.css";
function InfoNav() {
  return (
    <div className={styles.infoNav}>
      <div className={styles.social}>
        <img src="/images/icons/instagram.png" />
        <img src="/images/icons/telegram.png" />
        <img src="/images/icons/youtube.png" />
        <img src="/images/icons/linkedin.png" />
      </div>
      <nav aria-label="secondary-navigation">
        <ul>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
          <li>
            <a href="#">سوالات متداول</a>
          </li>

          <li>
            <a className={styles.address} href="#">
              <img src="/images/icons/balck-location.png" /> + انتخاب آدرس
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InfoNav;
