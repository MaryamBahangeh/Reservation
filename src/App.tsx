import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx";
import Statics from "./components/Statics/Statics";
import Cards from "./components/Cards/Cards";
import Consults from "./components/Consultants/Consults.tsx";
import Banner from "./components/Banner/Banner.tsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.tsx";
import ButtomBanner from "./components/BottomBanner/BottomBanner.tsx";
import doctors from "../src/doctors.json";
import clinics from "../src/clinics.json";
import consultants from "../src/consultants.json";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Statics />
      <Cards
        title={["محبوب ترین ", <span>پزشکان </span>, "این ماه"]}
        persons={doctors}
      />
      <Consults
        title={[<span>مشاورین </span>, "در دسترس"]}
        persons={consultants}
      />
      <Banner />
      <Cards
        title={["محبوب ترین ", <span>کلینیک های پزشکی</span>]}
        persons={clinics}
      />
      <NewsLetter />
      <ButtomBanner />
    </>
  );
}

export default App;
