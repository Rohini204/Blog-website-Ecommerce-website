import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Sidefooda from '../Pages/food/sidefood/Sidefooda'
import Single12 from '../Pages/Art12/Single12'
import videoBg from "../Assets/food.mp4";
import "./mainfood.css";
const Main12 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>THE SECRET SOUR: CITRIC ACID POWDER’S IMPACT ON FLAVOR BALANCE</h1> 
       <p>BY SARAH WILLIAMS / FOOD / DECEMBER 30, 2023</p>
    </div>
    <div className="home">
    <Single12/>
    <Sidefooda/>
    </div>
    </div>
    </>
  )
}

export default Main12