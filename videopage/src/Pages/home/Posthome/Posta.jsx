import React from 'react'
import "./Post.css";
import { Link } from 'react-router-dom';
const Posta = () => {
  return (
    <div className='post'>
    <img
    className='postImg'
    src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Herbs-For-Life-Harnessing-The-Power-Of-Nature-With-Kratom-And-Other-Healing-Plants-570x381.jpg"
    />
    <div className="info">
        <div className="cats">
            <span className="cat">HEALTH / FEBRUARY 20,2024</span>
        </div>
        <span className="posttitle"><center>
        <Link to="/herbs for life" style={{textDecoration:"none",color:"#111111"}}>HERBS FOR LIFE: HARNESSING THE POWER OF NATURE</Link>

        </center></span>
        <hr/>
        <span className="date">BY GEORGE HANKS</span>
    </div>
</div>
  )
}

export default Posta