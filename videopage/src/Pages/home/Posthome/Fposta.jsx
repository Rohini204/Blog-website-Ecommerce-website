import React from 'react'
import "./Fpost.css";
import { Link } from 'react-router-dom';
const Fposta = () => {
  return (
    <div className='post'>
        <img
        className='postImg'
        src="https://artofhealthyliving.com/wp-content/uploads/2024/02/Fitness-At-Home-Effective-Workouts-Without-A-Gym.jpg"
        />
        <div className="info">
            <div className="cats">
                <span className="cat">FITNESS / FEBRUARY 7,2024</span>
            </div>
            <span className="posttitle"><center>
            <Link to="/fitness at home" style={{textDecoration:"none",color:"#111111"}}>FITNESS AT HOME: EFFECTIVE WORKOUTS WITHOUT A GYM</Link>

            </center></span>
            <hr/>
            <span className="date">BY POPPY ROBINSON</span>
        </div>
    </div>
  )
}

export default Fposta