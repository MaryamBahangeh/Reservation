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

async function getDoctors() {
  const response = await fetch("http://localhost:5000/doctors");
  const doctors = await response.json();
  return doctors;
}

async function getConsultants() {
  const response = await fetch("http://localhost:5000/consultants");
  const doctors = await response.json();
  return doctors;
}

async function getClinics() {
  const response = await fetch("http://localhost:5000/clinics");
  const doctors = await response.json();
  return doctors;
}

function App() {
  const [doctors, setDoctors] = useState([]);
  const [consultants, setConsultants] = useState([]);
  const [clinics, setClinics] = useState([]);

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
        persons={consultants}
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
