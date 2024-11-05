import DoctorCard from "./DoctorCard/DoctorCard.tsx";
import FilterCard from "./FilterCard/FilterCard.tsx";
import Sorting from "./Sorting/Sorting.tsx";
import styles from "./SearchPage.module.css";
import { getDoctors } from "../../api/doctor.ts";
import { useEffect, useState } from "react";
import { Person } from "../../model/person.ts";
import { Service } from "../../model/service.ts";
import Button, { Color, Size, Variant } from "../Button/Button.tsx";
import Search from "../Search/Search.tsx";
import { Speciality } from "../../model/speciality.ts";
import { Gender } from "../../enums/gender.ts";

function SearchPage() {
  const [doctors, setDoctors] = useState<Person[]>([]);
  const [originalDoctors, setOriginalDoctors] = useState<Person[]>([]);

  useEffect(() => {
    getDoctors().then((x: Person[]) => {
      setDoctors(x);
      setOriginalDoctors(x);
    });
  }, []);

  const [activeSpecialty, setActiveSpecialty] = useState<Speciality | null>(
    null,
  );
  const [activeGender, setActiveGender] = useState<Gender | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    const filteredBySpecialty = filterBySpecialty(
      originalDoctors,
      activeSpecialty,
    );
    const filteredByGender = filterByGender(filteredBySpecialty, activeGender);
    const filterdByService = filterByService(filteredByGender, activeService);

    setDoctors(filterdByService);
  }, [originalDoctors, activeSpecialty, activeGender, activeService]);

  const filterBySpecialty = (
    data: Person[],
    specialty: Speciality | null,
  ): Person[] => {
    if (specialty === null) {
      return data;
    }
    return data.filter((doctor) => doctor.specialtyId === specialty.id);
  };

  const filterByService = (
    data: Person[],
    service: Service | null,
  ): Person[] => {
    if (service === null) {
      return data;
    }
    return data.filter((doctor) => {
      return doctor.services.some((x: Service) => x.id === service.id);
    });
  };

  const filterByGender = (data: Person[], gender: Gender | null): Person[] => {
    if (gender === null) {
      return data;
    }
    return data.filter((doctor) => doctor.gender === gender);
  };

  const restHandler = () => {
    setDoctors(originalDoctors);
    setActiveSpecialty(null);
    setActiveGender(null);
    setActiveService(null);
  };

  const serviceChangeHandler = (item: Service | null) => {
    setActiveService(item);
  };

  const genderChangeHandler = (item: Gender | null) => {
    setActiveGender(item);
  };
  const specialityChangeHandler = (item: Speciality | null) => {
    setActiveSpecialty(item);
  };

  return (
    <div className={styles["search-page"]}>
      <Search className={styles.search}></Search>
      <div className={styles["search-content"]}>
        <div className={styles.filter}>
          <div>
            <FilterCard
              activeService={activeService}
              activeSpeciality={activeSpecialty}
              activeGender={activeGender}
              onGenderChange={genderChangeHandler}
              onSpecialtyChange={specialityChangeHandler}
              onServiceChange={serviceChangeHandler}
              onReset={restHandler}
            />
          </div>
          <div className={styles.advertise}>
            <div>
              <img alt="advertise" src="./images/turn-content/advertise.png" />
              <span>بیمیتو،در روزهای سخت و بیماری همراه شماست...</span>
              <Button
                variant={Variant.FILL}
                size={Size.MEDIUM}
                color={Color.WHITE}
                buttonText="دریافت بیمه"
                suffix="./icons/arrow-left.svg"
              ></Button>
              <img className={styles.arrow} src="./icons/arrow-left.svg" />
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
      </div>{" "}
    </div>
  );
}

export default SearchPage;
