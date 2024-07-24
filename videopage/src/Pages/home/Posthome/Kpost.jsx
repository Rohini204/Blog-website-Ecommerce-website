import React from 'react'
import { Link } from 'react-router-dom'

export default function Kpost() {
  return (
    <div>
        <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2023/12/The-Secret-Sour-Citric-Acid-Powders-Impact-On-Flavor-Balance.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">FOOD / DECEMBER 30,2023</span>
            </div>
            <span className="posttitle"><center>
              <Link to="the secret sour" style={{textDecoration:"none",color:"#111111"}}>THE SECRET SOUR: CITRIC ACID POWDER’S IMPACT ON FLAVOR BALANCE</Link>
              <center/></center></span>
            <hr/>
            <span className="date">BY SARAH WILLIAMS</span>
        </div>
    </div>
    </div>
  )
}
