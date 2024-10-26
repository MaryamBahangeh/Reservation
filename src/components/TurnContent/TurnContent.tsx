import DoctorCard from "./DoctorCard/DoctorCard.tsx";
import FilterCard from "./FilterCard/FilterCard.tsx";
import Sorting from "./Sorting/Sorting.tsx";
import styles from "./TurnContent.module.css";
import { getDoctorServices } from "../../api/doctor.ts";
import React, { useEffect, useState } from "react";
import { Person } from "../../model/person.ts";
import { Speciality } from "../../model/speciality.ts";

function TurnContent() {
  const [doctors, setDoctors] = useState<Person[]>([]);
  const [originalDoctors, setOriginalDoctors] = useState<Person[]>([]);

  useEffect(() => {
    getDoctorServices().then((x: Person[]) => {
      setOriginalDoctors(x);
      setDoctors(x);
    });
  }, []);

  const resetHandler = (): void => {
    setDoctors(originalDoctors);
  };

  const serviceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value === 0) {
      setDoctors(originalDoctors);
      return;
    }

    const filteredDoctors: Person[] = originalDoctors.filter((doctor: Person) =>
      doctor.services.some((service) => service.id === value),
    );

    setDoctors(filteredDoctors);
  };

  const genderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredDoctors: Person[] = originalDoctors.filter(
      (x: Person) => x.gender === value,
    );
    setDoctors(filteredDoctors);
  };

  const specialityChangeHandler = (value: Speciality | null) => {
    if (value === null) {
      setDoctors(originalDoctors);
      return;
    }

    const filteredDoctors: Person[] = originalDoctors.filter(
      (x: Person) => x["specialtyId"] === value.id,
    );

    setDoctors(filteredDoctors);
  };

  return (
    <div className={styles["turn-content"]}>
      <div className={styles.filter}>
        <div>
          <FilterCard
            onGenderChange={genderChangeHandler}
            onSpecialtyChange={specialityChangeHandler}
            onServiceChange={serviceChangeHandler}
            onReset={resetHandler}
          />
        </div>
        <div className={styles.advertise}>
          <div>
            <img alt="advertise" src="./images/turn-content/advertise.png" />
            <span>بیمیتو،در روزهای سخت و بیماری همراه شماست...</span>
          </div>
        </div>
      </div>
      <div className={styles.sorting}>
        <Sorting />
      </div>

      <div className={styles.doctor}>
        {doctors.map((item) => (
          <DoctorCard key={item.id} person={item} />
        ))}
      </div>
    </div>
  );
}

export default TurnContent;
