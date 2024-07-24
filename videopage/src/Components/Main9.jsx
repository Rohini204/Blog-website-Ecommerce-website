import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single9 from '../Pages/Art9/Single9'
import Sidefit from '../Pages/fitness/sidefit/Sidefit'
import videoBg from "../Assets/work.mp4";
import "./mainfit.css";

const Main9 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>WEIGHT LOSS AND RUBBER WEIGHT PLATES: BURN CALORIES AND BOOST METABOLISM</h1> 
       <p>BY LOUISE SMITHSON / FITNESS /FEBRUARY 8, 2024</p>
    </div>
    
    <div className="home">
    <Single9/>
    <Sidefit/>
    </div>
    </div>
    </>
  )
}

export default Main9