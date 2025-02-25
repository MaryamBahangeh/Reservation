import styles from "./InfoNav.module.css";
function InfoNav() {
  return (
    <div className={styles.infoNav}>
      <div className={styles.social}>
        <img src="/icons/instagram.png" />
        <img src="/icons/telegram.png" />
        <img src="/icons/youtube.png" />
        <img src="/icons/linkedin.png" />
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
              <img src="/icons/black-location.png" /> + انتخاب آدرس
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InfoNav;
