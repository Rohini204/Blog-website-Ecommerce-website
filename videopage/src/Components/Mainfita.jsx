import React from 'react'
import Postfit from '../Pages/fitness/postfit/Postfit'
import Sidefit from '../Pages/fitness/sidefit/Sidefit'
import "./mainfit.css";
import videoBg from "../Assets/work.mp4";
import { Topbar } from '../Pages/home/topbar/Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
const Mainfita = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
           <h1>FITNESS AT HOME: EFFECTIVE WORKOUTS WITHOUT A GYM</h1> 
           <p>BY POPPY ROBINSON / FITNESS / FEBRUARY 7, 2024</p>
        </div>
        <div className="home">
        <Postfit/>
        <Sidefit/>
        </div>
    </div>
    
    </>
  )
}

export default Mainfita