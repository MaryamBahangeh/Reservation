import styles from "./Search.module.css";
import Button, { Color, Size, Variant } from "../Button/Button.tsx";

function Search({ className }: { className?: string }) {
  return (
    <div className={`${styles.search} ${className}`}>
      <img
        className={styles["search-icon"]}
        alt=""
        src="/icons/search-normal.png"
      />
      <input type="text" placeholder="جستجو پزشک،درمانگر،کلینیک..." />
      <Button
        variant={Variant.OUTLINE}
        color={Color.PRIMARY}
        size={Size.MEDIUM}
        buttonText="انتخاب شهر"
        prefix="/icons/green-location.png"
      >
        {" "}
      </Button>
    </div>
  );
}

export default Search;
