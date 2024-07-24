import React from 'react'
import { Single } from '../Pages/beauty/single/Single'
import { Sidebar } from '../Pages/beauty/sidebar/Sidebar'
import "./main.css";
import videoBg from "../Assets/video1.mp4";
import { Topbar } from '../Pages/home/topbar/Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
const Maina = () => {
  return (
    <>
    <Topbar/>
    <div className='main'>
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    <div className="content">
       <h1>WHY YOUR SKIN NEEDS LOVE: IMPORTANCE OF A DAILY SKINCARE ROUTINE</h1> 
       <p>BY GEMMA HAYES / BEAUTY / FEBRUARY 15, 2024</p>
    </div>
    
    <div className="home">
    <Single/>
    <Sidebar/>
    </div>
    </div>
    
    </>
  )
}

export default Maina