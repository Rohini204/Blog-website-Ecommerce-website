import React from 'react'
import { Link } from 'react-router-dom'

export default function Gpost() {
  return (
    <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Minimizing-The-Health-Risks-Of-Spending-Too-Much-Time-Online.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">WELLNESS / FEBRUARY 19,2024</span>
            </div>
            <span className="posttitle"><center>
            <Link to="/minimizing the health risks of spending too much time online" style={{textDecoration:"none",color:"#111111"}}>MINIMIZING THE HEALTH RISKS OF SPENDING TOO MUCH TIME ONLINE</Link>
            </center></span>
            <hr/>
            <span className="date">BY THOMAS MARTIN</span>
        </div>
    </div>
  )
}
