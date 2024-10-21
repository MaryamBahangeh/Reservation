import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <img
        className={styles["search-icon"]}
        alt="search"
        src="/images/icons/search-normal.png"
      />
      <input type="text" placeholder="جستجو پزشک،درمانگر،کلینیک..." />
      <button>
        <img alt="location" src="/images/icons/green-location.png" />
        انتخاب شهر
      </button>
    </div>
  );
}

export default Search;
