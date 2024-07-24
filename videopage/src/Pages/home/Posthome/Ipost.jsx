import React from 'react'
import { Link } from 'react-router-dom'

export default function Ipost() {
  return (
    <div>
        <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/01/2024s-Ultimate-Guide-To-Vibrant-Hair.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">BEAUTY / FEBRUARY 08,2024</span>
            </div>
            <span className="posttitle"><center>
              <Link to="2024's ultimate guide to vibrant hair" style={{textDecoration:"none",color:"#111111"}}>2024’S ULTIMATE GUIDE TO VIBRANT HAIR</Link>
              <center/></center></span>
            <hr/>
            <span className="date">BY GEMMA HAYES</span>
        </div>
    </div>
    </div>
  )
}
