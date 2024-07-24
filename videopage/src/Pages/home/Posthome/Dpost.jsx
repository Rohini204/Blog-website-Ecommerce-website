import React from 'react'
import { Link } from 'react-router-dom'

export default function Dpost() {
  return (
    <div className='post'>
    <img
    className='postImg'
    src="https://artofhealthyliving.com/wp-content/uploads/2024/02/What-Are-The-Benefits-Of-Using-Flowers-In-Your-Skincare.jpg"
    />
    <div className="info">
        <div className="cats">
            <span className="cat">BEAUTY / FEBRUARY 08,2024</span>
        </div>
        <span className="posttitle"><center>
        <Link to="/what are the benefits of using flowers in your skincare" style={{textDecoration:"none",color:"#111111"}}>WHAT ARE THE BENEFITS OF USING FLOWERS IN YOUR SKINCARE</Link>
        </center></span>
        <hr/>
        <span className="date">BY POPPY ROBINSON</span>
    </div>
</div>
  )
}
