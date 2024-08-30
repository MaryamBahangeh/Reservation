//import React from 'react';
import './Navbar.css';

import logo from '../../assets/Logo.png'
import logoNobito from '../../assets/logoNobito.png'
import logoPlatform from '../../assets/logoPlatform.png'
import instagram from '../../assets/instagram.png'
import telegram from '../../assets/send-2.png'
import youtube from '../../assets/youtube.png'
import linkedinlogo from '../../assets/linkedin.png'
import {FaMapMarker} from "react-icons/fa";
function Navbar() {
    return (
        <>
            <div className='navbar'>

                <div className='firstDiv'>

                    <div className='floatLeft'>
                        <input className='loginBtn' type="button" value={`ورود/ ثبت نام`}/>
                    </div>
                    <div className='floatLeft'>
                        {/*<img className='belBtn' src={bel2} alt="reservation"/>*/}
                        <input className='belBtn' type="button"/>
                    </div>


                    <div className='rightDiv'  >
                        <div className='logoDiv'>
                            <div className='floatRight'>
                                <img src={logo} className='logo' alt="reservation"/>
                            </div>
                            <div  className='nobitoLogo'>
                                <div>
                                    <img src={logoNobito} className='logoNobito' alt="Nobito"/>
                                </div>
                                <div  >
                                    <img src={logoPlatform} className='logoPlatform' alt="platform"/>
                                </div>

                            </div>
                        </div>

                        <div>
                            <ul className="rightMenu">
                                <li><a className="active" href="#home">نوبت دهی مطب</a></li>
                                <li className="dropdown">
                                    <a href="javascript:void(0)" className="btn"> <i className="arrow down"></i>خدمات</a>
                                    <div className="dropdown-content">
                                        <a href="#">خدمت 1</a>
                                        <a href="#">خدمت 2</a>
                                        <a href="#">خدمت 3</a>
                                    </div>
                                </li>
                                <li><a href="#contact">مشاوره آنلاین</a></li>
                                <li><a href="#about">مجله سلامت</a></li>
                                <li><a href="#about">نیکوکاری </a></li>
                            </ul>
                        </div>
                    </div>


                </div>
                {/*<hr className='line'/>*/}
                <div className='lineDiv'></div>
                <div className='leftMenu'>
                    <div>
                        <input className='adressBtn' value='انتخاب آدرس +' type='button'>
                        </input> <FaMapMarker className='mapCity'/>
                    </div>
                    <div >
                        <ul >
                            <li>
                                <a>سوالات متداول</a>
                            </li>
                            <li>
                                <a>تماس با ما</a>
                            </li>
                            <li>
                                <a>درباره ما</a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='social'>
                    <div >
                        <img  src={instagram} alt={"instagram"}/>
                    </div>
                    <div >
                        <img  src={telegram} alt={"telegram"}/>
                    </div>
                    <div >
                        <img src={youtube} alt={"LinkedIn"}/>
                    </div>
                    <div >
                        <img  src={linkedinlogo} alt={"LinkedIn"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;