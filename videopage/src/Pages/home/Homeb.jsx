import React from 'react'
import Postsa from './Posts/Postsa'
import Sidebarhomea from './Sidebarhome/Sidebarhomea'
import "./Home.css";
import Newsletter from '../../Components/Newsletter';
import Footer from '../../Components/Footer';
import { Topbar } from './topbar/Topbar';
const Homeb = () => {
  return (
    <>
    <Topbar/>
    <div className='home'>
    <Postsa/>
    <Sidebarhomea/>
  </div>
  <Newsletter/>
  <Footer/>
  </>

  )
}

export default Homeb