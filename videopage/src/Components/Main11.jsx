import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single11 from '../Pages/Art11/Single11'
import Sidefooda from '../Pages/food/sidefood/Sidefooda'
import videoBg from "../Assets/food.mp4";
import "./mainfood.css";
const Main11 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>CREATING THE BEST HOME ENVIRONMENT</h1> 
       <p>BY MARIA BEDFORD / WELLBEING / FEBRUARY 19, 2024</p>
    </div>
    <div className="home">
    <Single11/>
    <Sidefooda/>
    </div>
    </div>
    </>
  )
}

export default Main11