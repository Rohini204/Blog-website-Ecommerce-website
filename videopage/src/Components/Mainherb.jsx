import React from 'react'
import videoBg from "../Assets/herb.mp4";
import Postherb from '../Pages/herb/postherb/Postherb';
import Sideherb from '../Pages/herb/sideherb/Sideherb';
const Mainherb = () => {
  return (
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>HERBS FOR LIFE: HARNESSING THE POWER OF NATURE</h1> 
       <p>BY GEORGE HANKS / WELLBEING / FEBRUARY 16, 2024</p>
    </div>
    <div className="home">
    <Postherb/>
    <Sideherb/>
    </div>
</div>
  )
}

export default Mainherb;

