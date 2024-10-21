import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Message from "./components/Message/Message.tsx";
import "./App.css";
import Search from "./components/Search/Search.tsx";
import Sorting from "./components/TurnContent/Sorting/Sorting.tsx";
import TurnContent from "./components/TurnContent/TurnContent.tsx";
import DoctorCard from "./components/TurnContent/DoctorCard/DoctorCard.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <TurnContent />
      <Footer />
      <Message />
    </>
  );
}

export default App;
