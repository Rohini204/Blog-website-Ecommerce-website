import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single7 from '../Pages/Art7/Single7'
import Sidefooda from '../Pages/food/sidefood/Sidefooda'
import videoBg from "../Assets/food.mp4";
import "./mainfit.css";


const Main7 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>8 REASONS WHY YOU SHOULD SWITCH TO A PLANT BASED DIET</h1> 
       <p>BY POPPY ROBINSON / FOOD / DECEMBER 4, 2023</p>
    </div>
    
    <div className="home">
    <Single7/>
    <Sidefooda/>
    </div>
    </div>
    </>
  )
}

export default Main7