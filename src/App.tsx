import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Statics from "./components/Statics/Statics";
import Cards from "./components/Cards/Cards";
import Consults from "./components/Consultants/Consults.tsx";
import Banner from "./components/Banner/Banner.tsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.tsx";
import ButtomBanner from "./components/BottomBanner/BottomBanner.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";
import doctors from "./assets/data/doctors.json";
import clinics from "./assets/data/clinics.json";
import consultants from "./assets/data/consultants.json";
import Footer from "./components/Footer/Footer.tsx";
import Message from "./components/Message/Message.tsx";
import "./App.css";

function App() {
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
      {/*<Message />*/}
    </>
  );
}

export default App;
