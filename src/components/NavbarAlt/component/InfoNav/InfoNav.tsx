import instagram from "../../../../assets/instagram.png";
import telegram from "../../../../assets/send-2.png";
import youtube from "../../../../assets/youtube.png";
import linkedinlogo from "../../../../assets/linkedin.png";
import { FaMapMarker } from "react-icons/fa";

import "./InfoNav.css";

function InfoNav() {
  return (
    <div className="info-nav">
      <div className="socials">
        <div className="icon">
          <img src={instagram} alt="" />
        </div>
        <div className="icon">
          <img src={telegram} alt="" />
        </div>
        <div className="icon">
          <img src={youtube} alt="" />
        </div>
        <div className="icon">
          <img src={linkedinlogo} alt="" />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">سوالات متداول</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">
              <FaMapMarker className="mapCity" />+ انتخاب آدرس
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InfoNav;
