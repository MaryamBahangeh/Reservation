import logo from "../../../../assets/Logo.png";
import logoNobito from "../../../../assets/logoNobito.png";
import logoPlatform from "../../../../assets/logoPlatform.png";

import "./MainNav.css";

function MainNav() {
  return (
    <div className="main-nav">
      <div className="logo">
        <img className="heart" src={logo} alt=""></img>
        <img className="title" src={logoNobito} alt=""></img>
        <img className="subtitle" src={logoPlatform} alt=""></img>
      </div>
    </div>
  );
}

export default MainNav;
