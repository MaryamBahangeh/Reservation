import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Message from "./components/Message/Message.tsx";
import "./App.css";
import SearchPage from "./components/SearchPage/SearchPage.tsx";
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import { getDoctors } from "./api/doctor.ts";
import { Person } from "./model/person.ts";

function App() {
  const [doctors, setDoctors] = useState<Person[]>([]);

  useEffect(() => {
    getDoctors().then((x) => setDoctors(x));
  }, []);

  return (
    <>
      <Navbar />
      <Cards
        title={{
          prefix: "محبوبترین ",
          main: "پزشکان ",
          suffix: "این ماه",
        }}
        persons={doctors}
      />

      <SearchPage />
      <Footer />
      <Message />
    </>
  );
}

export default App;
