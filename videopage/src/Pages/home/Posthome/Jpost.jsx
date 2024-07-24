import React from 'react'
import { Link } from 'react-router-dom'

export default function Jpost() {
  return (
    <div>
        <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Creating-The-Best-Home-Environment.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">WELLNESS / FEBRUARY 19,2024</span>
            </div>
            <span className="posttitle"><center>
              <Link to="creating the best home environment" style={{textDecoration:"none",color:"#111111"}}>CREATING THE BEST HOME ENVIRONMENT</Link>
              <center/></center></span>
            <hr/>
            <span className="date">BY MARIA BEDFORD</span>
        </div>
    </div>
    </div>
  )
}
