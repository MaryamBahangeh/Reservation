import styles from "./Header.module.css";
import { FaMapMarker, FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.title}>
        تلاش ما دسترسی سریعتر و آسان تر شما به خدمات پزشکی است
      </p>
      <div className={styles.subtitle}>
        <p>کافیست خدمات درمانی موردنظر خود را جستجو کنید</p>
        <p>(دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)</p>
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
