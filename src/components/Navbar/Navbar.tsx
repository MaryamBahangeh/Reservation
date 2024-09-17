import styles from "./Navbar.module.css";
import MainNav from "./components/MainNav/MainNav.tsx";
import InfoNav from "./components/InfoNav/InfoNav.tsx";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <MainNav></MainNav>
      <hr />
      <InfoNav></InfoNav>
    </div>
  );
}

export default Navbar;
