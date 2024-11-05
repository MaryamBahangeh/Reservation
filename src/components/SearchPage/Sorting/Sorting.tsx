import styles from "./Sorting.module.css";

function Sorting() {
  return (
    <div className={styles.sorting}>
      <span className={styles.header + " title-t2-medium"}>
        {" "}
        <img src="./images/sorting/sort.png" alt="sorting" />
        دسته بندی :
      </span>
      <ul className={styles.list}>
        <li>
          <a>محبوبترین ها</a>
        </li>
        <li>
          <a>بیشترین امتیاز</a>
        </li>
        <li>
          <a>سریعترین نوبت</a>
        </li>
        <li>
          <a>کم ترین معطلی در مطب</a>
        </li>
      </ul>
    </div>
  );
}

export default Sorting;
