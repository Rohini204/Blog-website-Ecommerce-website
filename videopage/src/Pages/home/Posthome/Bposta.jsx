import React from 'react'
import "./Bpost.css"
import { Link } from 'react-router-dom';
const Bposta = () => {
  return (
    <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Why-Your-Skin-Needs-Love-Importance-Of-A-Daily-Skincare-Routine.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">BEAUTY / FEBRUARY 15,2024</span>
            </div>
            <span className="posttitle"><center>
        <Link to="why your skin needs love" style={{textDecoration:"none",color:"#111111"}}>WHY YOUR SKIN NEEDS LOVE: IMPORTANCE OF A DAILY SKINCARE ROUTINE</Link>
              <center/></center></span>
            <hr/>
            <span className="date">BY GEMMA HAYES</span>
        </div>
        </div>
  )
}

export default Bposta;