import DoctorCard from "./DoctorCard/DoctorCard.tsx";
import FilterCard from "./FilterCard/FilterCard.tsx";
import Sorting from "./Sorting/Sorting.tsx";
import styles from "./TurnContent.module.css";
import { getDoctors } from "../../../api/doctor.ts";
function TurnContent() {
  return (
    <div className={styles["turn-content"]}>
      <div className={styles.filter}>
        <FilterCard />
      </div>
      <div className={styles.sorting}>
        <Sorting />
      </div>
      <div className={styles.doctor}>
        {" "}
        <DoctorCard />
      </div>
    </div>
  );
}

export default TurnContent;
