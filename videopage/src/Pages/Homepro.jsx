import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Producta from '../Components/Producta'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'

const Homepro = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
        <Categories/>
        <Producta/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Homepro