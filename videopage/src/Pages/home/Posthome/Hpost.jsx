import React from 'react'
import { Link } from 'react-router-dom'

export default function Hpost() {
  return (
    <div>
        <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Weight-Loss-And-Rubber-Weight-Plates-Burn-Calories-And-Boost-Metabolism.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">FITNESS / FEBRUARY 08,2024</span>
            </div>
            <span className="posttitle"><center>
              <Link to="weight loss and rubber weight plates" style={{textDecoration:"none",color:"#111111"}}>WEIGHT LOSS AND RUBBER WEIGHT PLATES: BURN CALORIES AND BOOST METABOLISM</Link>
              <center/></center></span>
            <hr/>
            <span className="date">BY LOUISE SMITHSON</span>
        </div>
    </div>
    </div>
  )
}
