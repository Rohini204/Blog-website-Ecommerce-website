import React from 'react'
import videoBg from "../Assets/food.mp4";
import "./mainfood.css";
import Postfooda from '../Pages/food/postfood/Postfooda';
import Sidefooda from '../Pages/food/sidefood/Sidefooda';
import { Topbar } from '../Pages/home/topbar/Topbar';
const Foodmain = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>CRAFTING THE ULTIMATE HIGH-PROTEIN MUSCLE-BUILDING DIET PLAN</h1> 
       <p>BY POPPY ROBINSON / FOOD /NOVEMBER 22, 2023</p>
    </div>
    <div className="home">
    <Postfooda/>
    <Sidefooda/>
    </div>
    </div>
    </>
  )
}

export default Foodmain