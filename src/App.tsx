import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx";
import Statics from "./components/Statics/Statics";
import Cards from "./components/Cards/Cards";
import Consults from "./components/Consultants/Consults.tsx";
import Banner from "./components/Banner/Banner.tsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.tsx";
import ButtomBanner from "./components/BottomBanner/BottomBanner.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";
import doctors from "./doctors.json";
import clinics from "./clinics.json";
import consultants from "./consultants.json";
import Footer from "./components/Footer/Footer.tsx";
import "./App.css";
import Title from "./components/Title/Title.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Statics />
      <Cards
        title={
          <Title
            prefix={"محبوب ترین "}
            main={"پزشکان "}
            suffix={"این ماه"}
          ></Title>
        }
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
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
