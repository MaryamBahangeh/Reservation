import DoctorCard from "./DoctorCard/DoctorCard.tsx";
import FilterCard from "./FilterCard/FilterCard.tsx";
import Sorting from "./Sorting/Sorting.tsx";
import styles from "./TurnContent.module.css";
import { getDoctorServices } from "../../api/doctor.ts";
import React, { useEffect, useState } from "react";
import { Person } from "../../model/person.ts";
import { Service } from "../../model/service.ts";
import Button from "../Button/Button.tsx";

function TurnContent() {
  const [doctors, setDoctors] = useState<Person[]>([]);
  const [originalDoctors, setOriginalDoctors] = useState<Person[]>([]);
  useEffect(() => {
    getDoctorServices().then((x: Person[]) => {
      services(x);
    });
  }, []);

  const serviceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value === 0) {
      services(originalDoctors);
      return;
    }
    const filteredDoctors: Person[] = originalDoctors.filter(
      (x: Person) => x.serviceId === value,
    );
    services(filteredDoctors);
  };

  const genderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredDoctors: Person[] = originalDoctors.filter((x: Person) =>
      value == "0" ? !x.gender : value == "1" ? x.gender : true,
    );
    setDoctors(filteredDoctors);
  };
  const specialityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value === 0) {
      setDoctors(originalDoctors);
      return;
    }
    const filteredDoctors: Person[] = originalDoctors.filter(
      (x: Person) => x["specialtyId"] === value,
    );
    setDoctors(filteredDoctors);
  };

  const services = (x: Person[]) => {
    if (x.length == 0) {
      setDoctors([]);
      return;
    }
    const doctors: Person[] = [];
    let currentDoctor = x[0];
    let services: Service[] = [];

    for (let i = 0; i < x.length; i++) {
      if (currentDoctor.id !== x[i].id) {
        currentDoctor["services"] = services;
        doctors.push(currentDoctor);
        currentDoctor = x[i];
        services = [];
      }
      services.push({ id: x[i].serviceId, name: x[i].serviceName });
    }
    currentDoctor["services"] = services;
    doctors.push(currentDoctor);
    setDoctors(doctors);
    setOriginalDoctors(doctors.map((x) => x));
  };

  return (
    <div className={styles["turn-content"]}>
      <div className={styles.filter}>
        <div>
          <FilterCard
            onGenderChange={genderChangeHandler}
            onSpecialtyChange={specialityChangeHandler}
            onServiceChange={serviceChangeHandler}
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
