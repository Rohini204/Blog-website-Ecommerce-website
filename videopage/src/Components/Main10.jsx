import React from 'react'
import { Topbar } from '../Pages/home/topbar/Topbar'
import Single10 from '../Pages/Art10/Single10'
import Sideherb from '../Pages/herb/sideherb/Sideherb'
import videoBg from "../Assets/video1.mp4";

const Main10 = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>2024’S ULTIMATE GUIDE TO VIBRANT HAIR</h1> 
       <p>BY GEMMA HAYES / BEAUTY / JANUARY 18, 2024</p>
    </div>
    
    <div className="home">
    <Single10/>
    <Sideherb/>
    </div>
    </div>
    </>
  )
}

export default Main10