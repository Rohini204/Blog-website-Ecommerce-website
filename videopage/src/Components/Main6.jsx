import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single6 from '../Pages/Art6/Single6'
import Sidefit from '../Pages/fitness/sidefit/Sidefit'
import videoBg from "../Assets/video1.mp4";
import "./mainfit.css";

export const Main6 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>WHAT ARE THE BENEFITS OF USING FLOWERS IN YOUR SKINCARE</h1> 
       <p>BY POPPY ROBINSON / BEAUTY / FEBRUARY 8, 2024</p>
    </div>
    
    <div className="home">
    <Single6/>
    <Sidefit/>
    </div>
    </div>
    </>
  )
}
