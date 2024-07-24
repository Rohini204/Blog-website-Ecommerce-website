import React from 'react'
import "./Fdpost.css";
import { Link } from 'react-router-dom';
const Fdposta = () => {
  return (
    <div className='post'>
    <img
    className='postImg'
    src="https://artofhealthyliving.com/wp-content/uploads/2023/11/Crafting-The-Ultimate-High-Protein-Muscle-Building-Diet-Plan.jpg"
    />
    <div className="info">
        <div className="cats">
            <span className="cat">FOOD / NOVEMBER 22,2023</span>
        </div>
        <span className="posttitle"><center>
        <Link to="/high-protein diet plan" style={{textDecoration:"none",color:"#111111"}}>CRAFTING THE ULTIMATE HIGH-PROTEIN MUSCLE-BUILDING DIET PLAN</Link>

        </center></span>
        <hr/>
        <span className="date">BY POPPY ROBINSON</span>
    </div>
</div>
  )
}

export default Fdposta