import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Message from "./components/Message/Message.tsx";
import "./App.css";

import SearchPage from "./components/SearchPage/SearchPage.tsx";

function App() {
  return (
    <>
      <Navbar />
      <SearchPage />
      <Footer />
      <Message />
    </>
  );
}

export default App;
