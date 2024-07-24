import React from 'react'
import { Link } from 'react-router-dom'

export default function Epost() {
  return (
    <div className='post'>
    <img
    className='postImg'
    src="https://artofhealthyliving.com/wp-content/uploads/2023/12/8-Reasons-Why-You-Should-Switch-To-A-Plant-Based-Diet.jpg"
    />
    <div className="info">
        <div className="cats">
            <span className="cat">FOOD / DECEMBER 04,2023</span>
        </div>
        <span className="posttitle"><center>
        <Link to="/8 reasons why you should switch to a plant based diet" style={{textDecoration:"none",color:"#111111"}}>8 REASONS WHY YOU SHOULD SWITCH TO A PLANT BASED DIET</Link>
        </center></span>
        <hr/>
        <span className="date">BY POPPY ROBINSON</span>
    </div>
</div>
  )
}
