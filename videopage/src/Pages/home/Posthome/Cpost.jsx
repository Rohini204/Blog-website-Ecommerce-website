import React from 'react'
import { Link } from 'react-router-dom'

export default function Cpost() {
  return (
    <div>
        <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Dress-With-Confidence-Boosting-Your-Self-Esteem-Through-Fashion.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">BEAUTY / FEBRUARY 16,2024</span>
            </div>
            <span className="posttitle"><center>
              <Link to="dress with confidence" style={{textDecoration:"none",color:"#111111"}}>DRESS WITH CONFIDENCE: BOOSTING YOUR SELF-ESTEEM THROUGH FASHION</Link>
              <center/></center></span>
            <hr/>
            <span className="date">BY POPPY ROBINSON</span>
        </div>
    </div>
    </div>
  )
}
