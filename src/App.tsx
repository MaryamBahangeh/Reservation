import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Statics from "./components/Statics/Statics";
import Cards from "./components/Cards/Cards";
import Consults from "./components/Consultants/Consults.tsx";
import Banner from "./components/Banner/Banner.tsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.tsx";
import ButtomBanner from "./components/BottomBanner/BottomBanner.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Message from "./components/Message/Message.tsx";
import { getDoctors } from "./api/doctor.ts";
import { getConsultants } from "./api/consultant.ts";
import { getClinics } from "./api/clininc.ts";
import "./App.css";
import { useEffect, useState } from "react";
import { Person } from "./model/person.ts";
import { Consultant } from "./model/consultant.ts";

function App() {
  const [clinics, setClinics] = useState<Person[]>([]);
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [doctors, setDoctors] = useState<Person[]>([]);

  useEffect(() => {
    getClinics().then((x: Person[]) => setClinics(x));
    getDoctors().then((x: Person[]) => setDoctors(x));
    getConsultants().then((x: Consultant[]) => setConsultants(x));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Statics />
      <Cards
        title={{
          prefix: "محبوبترین ",
          main: "پزشکان ",
          suffix: "این ماه",
        }}
        persons={doctors}
      />
      <Consults
        title={{
          prefix: "",
          main: "مشاورین ",
          suffix: "در دسترس",
        }}
        consultants={consultants}
      />
      <Banner />
      <Cards
        title={{
          prefix: "محبوبترین ",
          main: "کلینیک های پزشکی",
        }}
        persons={clinics}
      />
      <NewsLetter />
      <ButtomBanner />
      <Feedback />
      <Footer />
      <Message />
    </>
  );
}

export default App;
