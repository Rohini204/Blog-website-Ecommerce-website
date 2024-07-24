import React from 'react'
import './Sidebarhome.css'

export const Sidebarhome = () => {
  return (
    <div className="sidebar">
    <div className="sidebari">
        <span className="title">ABOUT US</span>
        <p>Here, wellness is for all. Whether you are working toward a specific fitness goal or just hope to feel better and have more energy, our team of writers, editors, personal trainers, and wellness enthusiasts aims to provide wellness challenge with confidence and enthusiasm. </p>
    </div>
    <span className="title">CATEGORIES</span>
    <ul className="sidebarl">
        <li className="sidebarli">Beauty</li>
        <li className="sidebarli">Food</li>
        <li className="sidebarli">Fitness</li>
        <li className="sidebarli">Wellness</li>
        <li className="sidebarli">Health</li>
        <li className="sidebarli">Nutrition</li>
    </ul>
<div className="sidebari">
    <span className="title">FOLLOW US</span>
    <div className="social">
    <i className="icon fa-brands fa-square-facebook"></i>
    <i className="icon fa-brands fa-square-instagram"></i>
    <i className="icon fa-brands fa-linkedin-in"></i>
    <i className="icon fa-brands fa-pinterest"></i>
    </div>
</div>
</div>
  )
}

export default Sidebarhome;
