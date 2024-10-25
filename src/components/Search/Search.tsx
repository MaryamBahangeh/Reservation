import styles from "./Search.module.css";

type Props = {
  className?: string;
};

function Search({ className }: Props) {
  return (
    <div className={`${styles.search} ${className}`}>
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
