import { Link } from 'react-router-dom'
import './topbar.css';
import { useState } from 'react';

export const Topbar = () => {

  return (
    <div>
        <div className="top_i"><img src="https://artofhealthyliving.com/wp-content/uploads/2017/06/White-Bubble-Green-Heart-e1498252834607.png"/></div>
        <br></br><div className="line1"></div><br></br>
      
        <div className="topnav">
          <ul className="topl">
           
            <li className="topli">
              <Link to="/" style={{textDecoration:"none",color:"#111111"}}>HOME</Link>
            </li>
            <li className="topli topli-dropdown">
              <Link to="/beauty" style={{textDecoration:"none",color:"#111111"}}>BEAUTY</Link>
               
            </li>
            <li className="topli topli-dropdown">
              <Link to="/food" style={{textDecoration:"none",color:"#111111"}}>FOOD</Link>
              
            </li>
            <li className="topli topli-dropdown">
              <Link to="/fitness" style={{textDecoration:"none",color:"#111111"}}>FITNESS</Link>
              
            </li>
            <li className="topli"> 
            <Link to="/wellness" style={{textDecoration:"none",color:"#111111"}}>WELLNESS</Link>
              
            </li>
            <li className="topli">
            <Link to="/shop" style={{textDecoration:"none",color:"#111111"}}>RECOMMENDED</Link>
            </li>
            <li className="topli">
              <Link to="/register" style={{textDecoration:"none",color:"#111111"}}>SIGN UP/LOGIN</Link>
            </li>
            
          </ul>
          
        </div>
        <br></br><div className="line2"></div><br></br>
    </div>
  )
}