import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single5 from '../Pages/Art5/Single5'
import { Sidebar } from '../Pages/beauty/sidebar/Sidebar'
import videoBg from "../Assets/video1.mp4";
import "./mainfit.css";

const Main5 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>DRESS WITH CONFIDENCE: BOOSTING YOUR SELF-ESTEEM THROUGH FASHION</h1> 
       <p>BY GEMMA HAYES / BEAUTY / FEBRUARY 15, 2024</p>
    </div>
    
    <div className="home">
    <Single5/>
    <Sidebar/>
    </div>
    </div>
    </>
  )
}

export default Main5