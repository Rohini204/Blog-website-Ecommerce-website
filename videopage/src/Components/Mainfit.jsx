import React from 'react'
import videoBg from "../Assets/work.mp4";
import Postfit from '../Pages/fitness/postfit/Postfit';
import Sidefit from '../Pages/fitness/sidefit/Sidefit';
import "./mainfit.css"
const Mainfit = () => {
  return (
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
  )
}

export default Mainfit
