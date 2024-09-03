import MainNav from "./component/MainNav/MainNav.tsx";
import InfoNav from "./component/InfoNav/InfoNav.tsx";

function NavbarAlt() {
  return (
    <div className="navbar-alt">
      <MainNav />
      <hr />
      <InfoNav />
    </div>
  );
}

export default NavbarAlt;
