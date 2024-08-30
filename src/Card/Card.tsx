// import React from 'react';
import './Card.css'
import {FaStar} from "react-icons/fa";
import Dr3 from '../assets/DoctorPic.png'
function Card() {
    return (
        <>
            <div className='cardDiv'>
                <img className='imgCard' src={Dr3} alt="Dr3"/>

                <div style={{float: "right", marginRight: "10px"}}>
                    <p> علی رضایی</p>
                </div>
                <div style={{float: "left", marginLeft: "10px"}}>
                    <p> 4.7 <FaStar style={{color: "gold"}}/></p>
                </div>

                <div style={{float: "right", display: "block", marginRight: "10px", color: "gray"}}>
                    <p>متخصص قلب و عروق</p>
                </div>
                <div style={{float: "right", display: "block", marginRight: "10px", color: "blue"}}>
                    <p>2580 بیمار راضی (98%)</p>
                </div>
                <div style={{float: "right", display: "block", marginRight: "10px" }}>
                    <button className='btnCard' >جراحی</button>
                    <button className='btnCard'>تست </button>
                    <button className='btnCard'>قلب</button>
                </div>
            </div>
            <div>

            </div>

        </>
    );
}

export default Card;