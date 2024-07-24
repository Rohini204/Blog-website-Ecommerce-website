import React, { useEffect, useState } from 'react'
import "./Sidebarhome.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Subsbut=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 180px;
height: 50px;
color:#fff;
background: #111111;
border-radius: 10px;
font-size: 19px;
font-weight: 700px;
cursor: pointer;
margin: 0 auto;
font-size: 20px;
margin-right:105px
`
const Sidebarhomea = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
    url:"https://artofhealthyliving.com/wp-content/uploads/2023/12/The-Secret-Sour-Citric-Acid-Powders-Impact-On-Flavor-Balance.jpg",
    description:"THE SECRET SOUR: CITRIC ACID POWDER’S IMPACT ON FLAVOR BALANCE"
    },
    {
      url: "https://artofhealthyliving.com/wp-content/uploads/2024/02/Weight-Loss-And-Rubber-Weight-Plates-Burn-Calories-And-Boost-Metabolism.jpg",
      description: "WEIGHT LOSS AND RUBBER WEIGHT PLATES: BURN CALORIES AND BOOST METABOLISM"
    },
    {
      url: "https://artofhealthyliving.com/wp-content/uploads/2024/02/Creating-The-Best-Home-Environment.jpg",
      description: "CREATING THE BEST HOME ENVIRONMENT"
    },
    {
      url: "https://artofhealthyliving.com/wp-content/uploads/2024/01/2024s-Ultimate-Guide-To-Vibrant-Hair.jpg",
      description: "2024’S ULTIMATE GUIDE TO VIBRANT HAIR"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  const plusDivs = (n) => {
    setSlideIndex(prevIndex => (prevIndex + n + slides.length) % slides.length);
  };
  return (
    
    <div className="sidebar">
        <div className="sidebari">
            <span className="title">ABOUT US</span>
            <p style={{fontSize:"14px"}}>Here, wellness is for all. Whether you are working toward a specific fitness goal or just hope to feel better and have more energy, our team of writers, editors, personal trainers, and wellness enthusiasts aims to provide wellness challenge with confidence and enthusiasm. </p>
            <div className="art">STEP INTO A WORLD OF WELLNESS!</div>
                    </div><br></br><br></br>
                    <span className="title">FEATURED ARTICLES</span>
                    <ul><br></br>
                      <li style={{marginLeft:"50px", marginRight:"20px", textAlign:"start", fontSize:"14px"}}>Unlocking the Power of Mindfulness: Discover how mindfulness can transform your mental and physical well-being.</li><br></br>
                      <li style={{marginLeft:"50px", marginRight:"20px", textAlign:"start", fontSize:"14px"}}>Cultivating Healthy Habits for Long-Lasting Beauty and Vitality</li><br></br>
                      <li style={{marginLeft:"50px", marginRight:"20px", textAlign:"start", fontSize:"14px"}}>Harnessing the Benefits of Herbal Remedies for Inner and Outer Harmony</li><br></br>
                      <li style={{marginLeft:"50px", marginRight:"20px", textAlign:"start", fontSize:"14px"}}>Quick and Easy Beauty tips for Glowing Skin</li><br></br>
                      <li style={{marginLeft:"50px", marginRight:"20px", textAlign:"start", fontSize:"14px"}}>Nutrition Spotlight: Dive into the latest trends and tips for maintaining a balanced diet to enhance your inner radiance.</li><br></br>
                      <li style={{marginLeft:"50px", marginRight:"20px", textAlign:"start", fontSize:"14px"}}>Self-Care Corner: Indulge in self-care practices that rejuvenate your body, mind, and soul, bringing out your natural glow.</li><br></br>
                    </ul><br></br>
                    <div className="title">BLOG</div><br></br><br></br><br></br>
                    <div className="w3-content w3-display-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mySlides"
            style={{ display: index === slideIndex ? "block" : "none" }}
          >
            <img src={slide.url} alt={slide.description} style={{ width: "100%" }} />
            <div className="description">{slide.description}</div>

          </div>
        ))}
        <button className="w3-button w3-white w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
        <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>&#10095;</button>
      </div>
      <br></br><br></br>
        <span className="title">CATEGORIES</span>
        <ul className="sidebarl" >
            <li className="sidebarli" >
            <Link to="/beauty" style={{textDecoration:"none",color:"#111111"}}
             onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            >BEAUTY</Link>
              </li>
            <li className="sidebarli">
            <Link to="/food" style={{textDecoration:"none",color:"#111111"}}
             onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }}>FOOD</Link>

            </li>
            <li className="sidebarli">
            <Link to="/fitness" style={{textDecoration:"none",color:"#111111"}}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }}>FITNESS</Link>
            </li>
            <li className="sidebarli">
            <Link to="/wellness" style={{textDecoration:"none",color:"#111111"}}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }}>WELLNESS</Link>
            </li>
            <li className="sidebarli">SHOP</li>
        </ul><br></br>
    <div className="sidebari">
        <span className="title">CONNECT WITH US</span><br></br>
        <div className="art" style={{marginLeft:"30px",marginRight:"30px"}}>Stay updated on all things wellness by following us on social media:</div><br></br>
        <ul>
        <li style={{marginleft:"50px",marginRight:"20px", textAlign:"start", fontSize:"14px"}}>
        <i className="icon fa-brands fa-square-facebook"/> Facebook/@theartofhealthyliving       
          </li><br></br>
        <li style={{marginRight:"20px", textAlign:"start", fontSize:"14px"}}>
        <i className="icon fa-brands fa-square-instagram"/>
        Instagram/@theartofhealthyliving
          </li><br></br>
        <li style={{marginRight:"20px", textAlign:"start", fontSize:"14px"}}>
        <i className="icon fa-brands fa-linkedin-in"/>
        LinkedIn/@theartofhealthyliving
          </li><br></br>
        <li style={{marginRight:"20px", textAlign:"start", fontSize:"14px"}}>
        <i className="icon fa-brands fa-pinterest"/>
        Pinterest/@theartofhealthyliving
          </li><br></br>
        </ul>    
    </div>
    <br></br>
    <div className="crip">
      <div className="title">SUBSCRIPTION</div><br></br><br/>
      <div className="update">STAY UPDATED ON THE LATEST HEALTH, ARTICLES, AND EXCLUSIVE OFFERS BY SUBSCRIBING TO OUR NEWSLETTER.</div>
      <br></br><div className="update"><i class=" ic fa-solid fa-hand-point-down"></i>DON'T MISS OUT ON VALUABLE INSIGHTS TO IMPROVE YOUR WELL-BEING !!</div>
      <br></br><br></br><br></br>
      <Subsbut>
      <Link to='/subscription' style={{textDecoration:'none', color:"#fff"}}>Subscribe
            </Link>
        </Subsbut>
    </div>

    </div>
  )
}

export default Sidebarhomea