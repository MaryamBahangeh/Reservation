import styles from "./Header.module.css";
import { FaMapMarker, FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        تلاش ما دسترسی سریعتر و آسان تر شما به خدمات پزشکی است
      </div>
      <div className={styles.subtitle}>
        کافیست خدمات درمانی موردنظر خود را جستجو کنید
      </div>
      <div className={styles.subtitle}>
        (دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)
      </div>
      <div className={styles.search}>
        <FaSearch className={styles.faSearch} />

        <input type="text" placeholder="جستجو پزشک،درمانگر،کلینیک..." />

        <button>
          <FaMapMarker className={styles.mapcity} />
          انتخاب شهر
        </button>
      </div>
    </div>
  );
}

export default Header;
