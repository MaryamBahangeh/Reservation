import DoctorCard from "./DoctorCard/DoctorCard.tsx";
import FilterCard from "./FilterCard/FilterCard.tsx";
import Sorting from "./Sorting/Sorting.tsx";
import styles from "./TurnContent.module.css";
import { getDoctorServices } from "../../api/doctor.ts";
import React, { useEffect, useState } from "react";
import { Person } from "../../model/person.ts";
import { Speciality } from "../../model/speciality.ts";
import { Gender } from "../../enums/gender.ts";

function TurnContent() {
  const [doctors, setDoctors] = useState<Person[]>([]);
  const [originalDoctors, setOriginalDoctors] = useState<Person[]>([]);

  const [activeSpeciality, setActiveSpeciality] = useState<Speciality | null>(
    null,
  );

  const [activeGender, setActiveGender] = useState<Gender | null>(null);

  useEffect(() => {
    getDoctorServices().then((x: Person[]) => {
      setOriginalDoctors(x);
      setDoctors(x);
    });
  }, []);

  useEffect(() => {
    const filteredBySpecialty = filterBySpecialty(
      originalDoctors,
      activeSpeciality,
    );

    const filteredByGender = filterByGender(filteredBySpecialty, activeGender);

    setDoctors(filteredByGender);
  }, [activeSpeciality, activeGender, originalDoctors]);

  const filterBySpecialty = (
    data: Person[],
    specialty: Speciality | null,
  ): Person[] => {
    if (specialty === null) {
      return data;
    }

    return data.filter((x) => x.specialtyId === specialty.id);
  };

  const filterByGender = (data: Person[], gender: Gender | null): Person[] => {
    if (gender === null) {
      return data;
    }

    return data.filter((x) => x.gender === gender);
  };

  const resetHandler = (): void => {
    setActiveSpeciality(null);
    setActiveGender(null);

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

  const genderChangeHandler = (value: Gender | null) => {
    setActiveGender(value);
  };

  const specialityChangeHandler = (value: Speciality | null) => {
    setActiveSpeciality(value);
  };

  return (
    <div className={styles["turn-content"]}>
      <div className={styles.filter}>
        <div>
          <FilterCard
            activeSpeciality={activeSpeciality}
            activeGender={activeGender}
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
