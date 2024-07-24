import React from 'react'
import Postherb from '../Pages/herb/postherb/Postherb'
import Sideherb from '../Pages/herb/sideherb/Sideherb'
import "./mainherb.css";
import videoBg from "../Assets/herb.mp4";
import { Topbar } from '../Pages/home/topbar/Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
const Mainherba = () => {
  return (
    <>
    <Topbar/>
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

</>
  )
}

export default Mainherba