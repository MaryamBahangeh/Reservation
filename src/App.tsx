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
import "./App.css";
import { useEffect, useState } from "react";
import { getDoctors } from "./api/doctor.ts";
import { Person } from "./models/person.ts";
import { getConsultants } from "./api/consultants.ts";
import { Consultant } from "./models/consultant.ts";
import { getClinics } from "./api/clinic.ts";

function App() {
  const [doctors, setDoctors] = useState<Person[]>([]);
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [clinics, setClinics] = useState<Person[]>([]);

  useEffect(() => {
    getDoctors().then((x) => setDoctors(x));
    getConsultants().then((x) => setConsultants(x));
    getClinics().then((x) => setClinics(x));
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
