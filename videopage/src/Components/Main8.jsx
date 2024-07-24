import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single8 from '../Pages/Art8/Single8'
import Sidefooda from '../Pages/food/sidefood/Sidefooda'
import videoBg from "../Assets/work.mp4";
import "./mainfit.css";

const Main8 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>MINIMIZING THE HEALTH RISKS OF SPENDING TOO MUCH TIME ONLINE</h1> 
       <p>BY THOMAS MARTIN / HEALTH / FEBRUARY 19, 2024</p>
    </div>
    
    <div className="home">
    <Single8/>
    <Sidefooda/>
    </div>
    </div>
    </>
  )
}

export default Main8