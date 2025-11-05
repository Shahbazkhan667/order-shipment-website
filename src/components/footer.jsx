import React from 'react'
import "./footer.css"
import {FaArrowRight} from "react-icons/fa"
 import  Truck from "../assets/truck.png"
 import link from "../assets/link.png" 
  import logo from "../assets/logo.png"
  import Playstore from "../assets/playstore.png"

const footer = () => {
  return (
  <>
  <div className="newsletter-wrapper">
    <div className="newsletter-left">
    <div className="inside-letter-wrapper">
      <h1> subscribe our <span> newsletter</span> <br></br>  to get latest update!!</h1>
      <p> Get exciting offer and news by subscribing our newsletter.</p>
    </div>
    <div className="email-signup-sec">
      <div className="input-signup">
        <input type='email' placeholder='enter your  email'></input>
      </div>
      <div className="subscribe-button">
        <button> subscribe </button>
      </div>
    </div>
  </div>
  <div className="newsletter-right">
<img src={Truck} alt={Truck}></img>
  </div>
  
  </div>

 <div className="footer-three-sec">
  <div className="footer-top">
    <div className="footer-top-inside">
      <div className="footer-top-inside-left">
        <div className="f-t-i-l-top">
         <img src={logo} alt={logo}></img>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, minus.
          Lorem ipsum dolor sit amet .
         
          </h2>
          </div>   
          <div className="f-t-i-l-bottom">
          
          </div>  
          
           </div>
          
<div className="footer-top-useful-links">
  <div className="heading-links">
    <h1> home</h1>
  </div>
  <div className="links-footer">
   <li>  <a> name</a></li>
      <li>  <a>contact us</a></li>
         <li>  <a> name</a></li>
            <li> <a> name</a></li>
               <li> <a> terms </a></li>
  </div>
  
</div>
<div className="footer-top-useful-links">
  <div className="heading-links">
    <h1>pckages</h1>
  </div>
  <div className="links-footer">
   <li> <a> name</a></li>
      <li>  <a>contact us</a></li>
         <li>  <a> name</a></li>
            <li>  <a> name</a></li>
               <li>  <a> terms</a></li>
  </div>
  
</div>
<div className="footer-top-ourservice-links">
  <div className="heading-links">
    <h1>services </h1>
  </div>
  <div className="links-footer">
   <li> <a> name</a></li>
      <li>  <a>contact us</a></li>
         <li> <a> name</a></li>
            <li> <a> name</a></li>
               <li>  <a> terms</a></li>
  </div>
</div>
<div className="footer-top-ourservice-links">
  <div className="heading-links">
    <h1>About us </h1>
  </div>
  <div className="links-footer">
   <li> <a> calculator</a></li>
      <li>  <a>contact us</a></li>
         
  </div>
</div>
<div className="social-media-links">
   <div className="heading-links">
    <h1>our service </h1>
  </div>
    <div className="links-images">
<img src={link} alt={link}></img>
<img src={link} alt={link}></img>
<img src={link} alt={link}></img>
<img src={link} alt={link}></img>

            </div>

<div className="play-store">
   <img src={Playstore} alt={Truck}></img>
   <img src={Playstore} alt={Truck}></img>
</div>

</div>
{/* <div className="footer-top-right">
  <div className="footer-top-right-container">
    <div className="heading-footer">
      <div className="image">
        <img src={link} alt={link}></img>
      </div>
      <div className="text-heading-footer">
        <h1>get best rate for your logistics  shipping</h1>
      </div>
    </div>
    <div className="text-center">
      <p> 24<sup>*</sup>7 Lorem ipsum dolor sit amet.<br></br>
      Lorem ipsum dolor sit amet 
      </p>

    </div>
    <div className="button-footer-top-right">
<button> get best rates</button>
    </div>
  </div>
</div> */}
    </div>
  </div>
  <div className="footer-middle">
    <div className="footer-middle-right">
      <div className="footer-middle-right-image">
        <img src={link} alt={link}></img>
      </div>
      <div className="footer-middle-right-email">
        <p> email adress is</p>
        <p style={{color:"white"}}> name@email.com</p>

      </div>
    </div>
      <div className="footer-middle-right">
      <div className="footer-middle-right-image">
        <img src={link} alt={link}></img>
      </div>
      <div className="footer-middle-right-email">
        <p> your phone no is</p>
        <p style={{color:"white"}}> 0443-333999449</p>

      </div>
    </div>
      <div className="footer-middle-right">
      <div className="footer-middle-right-image">
        <img src={link} alt={link}></img>
      </div>
      <div className="footer-middle-right-email">
        <p> location adress is </p>
        <p style={{color:"white"}}> atd pakistan ,stret 5 </p>

      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="copyrights-left">
      <p> copy rights 2024 All rights reserved by name </p>
    </div>
    <div className="help-services-right-section">
      <div className="services">
        <p>services</p>
      </div>
      <div className="help">
        <p>help & faqs</p>
      </div>
      <div className="career">
        <p>career</p>
      </div>
    </div>
  </div>
 </div>
  </>
  )
}

export default footer
