import Header from "./components/Header/Header.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Cards from "../src/Card/components/Cards.tsx";

import "./App.css";
import NavbarAlt from "./components/NavbarAlt/NavbarAlt.tsx";

function App() {
  return (
    <>
      {/*<Navbar/>*/}
      <NavbarAlt />
      <Header />
      <Cards />
    </>
  );
}

export default App;
