import React, { useEffect, useState } from 'react'

import "./hero.css"
import border from "../assets/border.png" 
import bus from "../assets/bus.png" 
import Background from "../assets/Background.png" 
import logo  from "../assets/logo.png"
import link  from "../assets/link.png"
import star  from "../assets/star.png"
import start  from "../assets/start.png"
import owner  from "../assets/owner.png"
import starl  from "../assets/starl.png"
import { IoEarthOutline } from "react-icons/io5";
import  Truck from "../assets/truck.png"
import  Person from "../assets/person.png"
import { SlLocationPin } from "react-icons/sl";
import { IoMdPlayCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import { PiCalculatorThin } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";


const HeroSection = () => {
 const value1=75;
 const value2=60;
 const value3=90;
 const followers =[
  link,link,link
 ]


  const [years, setYears] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 25;
    const duration = 2000;
    const stepTime = duration / end;

    const counter = setInterval(() => {
      start += 1;
      setYears(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter); 
  }, []);
    const [values, setValues] = useState([0, 0, 0]); // 3 progress bars initially 0%

  useEffect(() => {
    const targets = [90, 75, 60]; // final percentages for each bar
    const duration = 0.00001; // total animation time (ms)
    const intervals = [];

    targets.forEach((end, index) => {
      let start = 0;
      const stepTime = duration / end;

      const interval = setInterval(() => {
        start += 1;
        setValues((prev) => {

          const newValues = [...prev];
          newValues[index] = start;
          return newValues;
        });
        if (start === end) clearInterval(interval);
      }, stepTime);

      intervals.push(interval);
    });

    // cleanup all intervals
    return () => intervals.forEach(clearInterval);
  }, []);
   const [orderData, setOrderData] = useState(null);
  const [trackingId ,setTrackingId] = useState("")
  const [loading , setLoading] =useState(false)
  const [error ,setError] = useState("")
const handleShipment = async() =>{
  if (!trackingId.trim()){
    alert("please enter your tracking id")
  }
  try {
    const response  = await fetch("https://api.thetrackpro.com/api/orders/web-track",{
     method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
body : JSON.stringify({trackingId}),

    });
    const data = await response.json();

   if (response.ok && data?.order){
    setOrderData(data.order)
   }
   else{
    setError(data?.message || "Order not found.")
   }

  }
  catch (err) {
 console.error("API Error:", err);
      setError("Failed to fetch order details. Please try again.");
    } finally {
     setLoading(false);
  }
}

  return (
    <>
   <div className="hero-section">
    <div className="top-sec">
    <div className="two-sections">
      <div className="left-section">
        <div className="heading">
          <h1>
            Best solution for <br></br>
            modern <span> logistics</span><br></br>
            Transport
          </h1>
          <h2> and this is our website for home delivery for best <br></br>
          for best services pelease contact and buty now items
          </h2>
        </div>
        <div className="reviews">
        <div className="reviews-button">
          <button>Get started</button>
        </div>
             <div className="followers-row">
      {followers.map((img, index) => (
        <img key={index} src={img} alt="follower" className="follower-img" />
      ))}
      <div className="add-btn">+</div>
    </div>
        <div className="img-review">
        
          <div className="count">
            <p id='count'> 35<span style={{ verticalAlign: "top", fontWeight:"600" ,fontSize: "1rem", position: "relative", top: "-0.2em", color:"#F9CC0E"}}>k+</span></p>
            <p style={{fontSize:"0.845rem"}}> positive reviews</p>
          </div>
        </div>
        </div>
      </div>
    <div className="delivery-img">
    <img src={bus} alt={bus}/>
    </div>
  
</div>
<div className="track-no">
  <div className="inside-track">
      <div className="input">
        <input type='text' placeholder='track your shipment no' 
        value={trackingId} onChange={(e) =>setTrackingId(e.target.value)} ></input>
      </div>
      <div className="tracking-button">
        <button onClick={handleShipment}> <GrSearch/> track shipment </button>
      </div>
      </div>


      {loading && <p style={{ color: "blue", marginTop: "1px" }}>Loading...</p>}
          {error && <p style={{ color: "red", marginTop: "1px" }}>{error}</p>}

          {orderData && (
            <div className="order-details" style={{ marginTop: "2px", padding: "2px",}}>
              <h3>Order Found ✅</h3>
              <p><strong>Status:</strong> {orderData.orderStatus}</p>
              <p><strong>Sender:</strong> {orderData.pickup?.senderName} ({orderData.pickup?.senderCity})</p>
              <p><strong>Receiver:</strong> {orderData.dropoff?.receiverName} ({orderData.dropoff?.city})</p>
              <p><strong>Order Type:</strong> {orderData.orderType}</p>
              <p><strong>Order Weight:</strong> {orderData.orderWeight} kg</p>
              <p><strong>Order Value:</strong> {orderData.orderValue}</p>
              <a href={orderData.slip} target="_blank" rel="noopener noreferrer">
                Download Slip
              </a>
            </div>
          )}
      <div className="frame-box">
      <div className="inside-box">
        <div className="icon-box">
<SlLocationPin/>

        </div>
        <div className="text-frame-box">
          <p> locate us</p>
        </div>
      </div>
       <div className="inside-box">
        <div className="icon-box">
<PiCalculatorThin />

        </div>
        <div className="text-frame-box">
          <p> calculator</p>
        </div>
      </div>
       <div className="inside-box">
        <div className="icon-box">
<BsTruck />

        </div>
        <div className="text-frame-box">
          <p> request</p>
        </div>
      </div>
      <div className="inside-box">
        <div className="icon-box">
<IoEarthOutline />

        </div>
        <div className="text-frame-box">
          <p> locate us</p>
        </div>
      </div>
    </div>
    </div>
    

   </div>
<div className="two-sections-first">
  <div className="left-section-first">
    <div className="image-sectionsf">
    <div className="image-con">
      <div className="image-bg"><img src={Person} alt={Person}></img></div>
      <div className="image-right-side"> 
        <div className="div-video">
          <h1> Highly skilled trade compliance team </h1>
      <div style={{ position: "relative"}}>
  <video
    src="your-video.mp4"
    style={{ width: "100%", height: "100%", borderRadius: "10px" }}
  ></video>

  {/* Icon overlay */}
  <IoMdPlayCircle id="play-btn"/>
</div>

 
        </div>
        <div className="img-cen"> <img src={Person} alt={Person} id='side-img'></img></div>
      <div className="div-exp"> 
        <p style={{fontSize:"2rem",fontWeight:"600"}}>{years}</p>
        <p>years of </p>
        <p> experience</p>
      </div></div>
     
    </div>
    </div>
  </div>
  <div className="right-section-first">
    <div className="first-heading">
    <h1>
      global <span> shipping</span><br></br> solution since 1990
    </h1>
    <h2> Aliquid irure perspiciatis dignissim, ipsum minima, <br></br> Aliquid irure perspiciatis dignissim, ipsum minima, <br></br> and where probabaility is when your  </h2>
    </div>
      <div className="progress-bar">
      <label> succesfull shipment</label>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${values[0]}%` }}>
          <span className="progress-text">{values[0]}%</span>
        </div>
      </div>
    
     </div>


 <div className="progress-bar">
      <label> customer saticfaction </label>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${values[1]}%` }}>
          <span className="progress-text">{values[1]}%</span>
        </div>
      </div>
    
     </div>



      <div className="progress-bar">
      <label>Products Delivery</label>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${values[2]}%` }}>
          <span className="progress-text">{values[2]}%</span>
        </div>
      </div>
    
     </div>


     <div className="learn-and-ceo">
     <div className="learn-more">
      <button>leran more</button>
     </div>
     <div className="owner-name">
      <div className="owner-image">
<img src={owner} alt={owner}></img>
      </div>
      <div className="owner-name1">
        <div className="owner">
        <p> mikalal walker</p>   
        </div>
        <div className="owner-info">
          <p> ceo ,head director </p>

        </div>
      </div>
     </div>
     </div>

  </div>
</div>
   
   <div className="efficient-cargo-section">
    <div className="cargo-heading">
      <h1> efficient <span> cargo</span> solutuion</h1>
      <h2> Efficient cargo solutoion solution cargo for basics for basics basics  not  <br></br>
      efficient cargo solution and not for apply
      </h2>
    </div>
    <div className="cargo-main">
      <div className="cargo-left">
        <div className="card">
          <div className="card-image">
            <img src={Background} alt={logo}></img>
          </div>
          <div className="card-info">
            <h1> real time tracking</h1>
            <h2> Molestias consequatur est
 <br></br> rhoncus soluta ultrices impe.</h2>

          </div>
        </div>
         <div className="card" id='card-bottom'>
          <div className="card-image">
            <img src={Background} alt={logo}></img>
          </div>
          <div className="card-info">
            <h1> real time tracking</h1>
            <h2> efficient rate is <br></br> with best rate is to</h2>
            
          </div>
        </div>
      </div>
      <div className="two-section-second-center">
        <div className="center-image">
          <img src={Truck} alt={Truck}></img>
        </div>
        <div className="card-review">
          <div className="card-star">
            <img src={start} alt={start}></img>
          </div>
          <div className="card-reviews">
            <div className="stars-reviews">
<div className="star-img">
<img src={star} alt={star}></img>
<img src={star} alt={star}></img>
<img src={star} alt={star}></img>
<img src={star} alt={star}></img>
<img src={starl} alt={starl}></img>
</div>
            <div className="text"><h2> 4.5(15k+reviews)</h2></div>
</div>
          </div>
        </div>
      </div>
       <div className="cargo-right">
        <div className="card">
          <div className="card-image">
            <img src={Background} alt={logo}></img>
          </div>
          <div className="card-info">
            <h1> real time tracking</h1>
            <h2> efficient rate is <br></br> with best rate is to</h2>

          </div>
        </div>
         <div className="card" id='card-bottom'>
          <div className="card-image">
            <img src={Background} alt={logo}></img>
          </div>
          <div className="card-info">
            <h1> real time tracking</h1>
            <h2> efficient rate is <br></br> with best rate is to</h2>
            
          </div>
        </div>
      </div>
      
    </div>
   </div>
   <div className="succesfull-delivery">
    
    <div className="delivery-heading">
      <h1> recent <span> succesfull</span> delivery</h1>
      <h2> efficient cargo solutoion solution cargo for basics for basics <br></br>
      efficient cargo solution and not for apply
      </h2>
    </div>
    <div className="two-section-second-main">
     <div className="column-gallery">
      <div className="row-top-gallery">
        <img src={Person} ></img>
        <img id='b2' src={Person} ></img>
        <img src={Person} ></img>
      </div>
       <div className="row-bottom-gallery">
        <img src={Person} ></img>
        <img src={Person} ></img>
       
      </div>
     </div>
      
    </div>
   </div>
<div className="best-shipping">
  <div className="best-shipping-two-sec">
    <div className="best-shipping-top-sec">
      <div className="best-shipping-left-sec">
        <div className="heading-shipping">
          <h1> best <span>shipping</span> &<br></br> types of fright</h1>
        </div>
        <div className="shipping-para">
          <p> whom about tpo know what sisss iiiii<br></br> whoom tooo knoww mehet jjjs krrrj nnnshshabba <br></br> nrh andhegfks sjjshd </p>
        </div>
        <div className="learn-more">
      <button>leranmore</button>
     </div>
      </div>
      <div className="best-shipping-right-sec">
        <div className="left-first-div">
          <div className="div-container">
            <div className="div-image">
            {/* <img src={border} alt={border}></img> */}
            </div>
            <div className="text-div">
              <p>Airplane <br></br> transplant</p>
              <button><GoArrowUpRight/> </button>
            </div>
          </div>
        </div>
         <div className="left-first-div">
          <div className="div-container">
            <div className="div-image">
            {/* <img src={border} alt={border}></img> */}
            </div>
            <div className="text-div">
              <p>Airplane <br></br> transplant</p>
              <button><GoArrowUpRight/> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="best-shipping-bottom-sec">
      <div className="best-bottom-left">
        <div className="left-first-div">
          <div className="div-container">
            <div className="div-image">
            {/* <img src={border} alt={border}></img> */}
            </div>
            <div className="text-div">
              <p>Airplane <br></br> transplant</p>
              <button><GoArrowUpRight/> </button>
            </div>
          </div>
        </div>
        <div className="left-first-div">
          <div className="div-container">
            <div className="div-image">
            {/* <img src={border} alt={border}></img> */}
            </div>
            <div className="text-div">
              <p>Airplane <br></br> transplant</p>
              <button><GoArrowUpRight/> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="best-bottom-right">
        <div className="best-bottom-container">
          <div className="inside-best-bottom">
            <div className="question">
              <p>have you any question ?</p>
            </div>
            <div className="waste">
              <p> dont waste a second <br></br> call us right now !!</p>
            </div>
            <div className="contact-no">
              <div className="contact-image">
                <img src={link} alt={link}></img>
              </div>
              <div className="contact-info">
                <p id='text-no'>call us at any time( 24*7)</p>
                <p id='no'> +000-00-9999-9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> 
 
 
 </>
  )
}

export default HeroSection
