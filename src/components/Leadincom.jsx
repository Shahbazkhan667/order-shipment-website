import React from 'react'
import "./leadincom.css"
import { LuCalendarCheck } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";
import  Person from "../assets/person.png"
import  Bus from "../assets/bus.png"
import  Borderb from "../assets/borderb.png"


import { MdOutlineVerifiedUser } from "react-icons/md";
const leadincom = () => {
    
  return (
    <>
    <div className="leading-logistics">
          <div className="delivery-heading">
      <h1> recent <span> succesfull</span> delivery</h1>
      <h2> efficient cargo solutoion solution cargo for basics for basics <br></br>
      efficient cargo solution and not for apply
      </h2>
    </div>
<div className="row-nos1">
    <div className="row-no-div">
        <div className="row-25">
            <div className="row-calendar">
                <LuCalendarCheck />
            </div>
            <div className="no25">
                <p>25+</p>
            </div>
        </div>
        <div className="years">
            <p> Years of experience in <br></br> logistic bussiness</p>
        </div>
        <div className="border-bottom">

        </div>
    </div>
    <div className="row-no-div">
        <div className="row-25">
            <div className="row-calendar">
           <IoPeopleSharp />
            </div>
            <div className="no25">
                <p style={{color:"#19286A"}}>6k+</p>
            </div>
        </div>
        <div className="years">
            <p> Years of experience in <br></br> logistic bussiness</p>
        </div>
        <div className="border-bottom-e">

        </div>
    </div>
    <div className="row-no-div">
        <div className="row-25">
            <div className="row-calendar">
             <LuCalendarCheck />
            </div>
            <div className="no25">
                <p>12+</p>
            </div>
        </div>
        <div className="years">
            <p> Years of experience in <br></br> logistic bussiness</p>
        </div>
        <div className="border-bottom">

        </div>
    </div>
    <div className="row-no-div">
        <div className="row-25">
            <div className="row-calendar">
                <LuCalendarCheck />
            </div>
            <div className="no25">
                <p style={{color:"#19286A"}}>30k+</p>
            </div>
        </div>
        <div className="years">
            <p> Years of experience in <br></br> logistic bussiness</p>
        </div>
        <div className="border-bottom-e">

        </div>
    </div>
</div>
<div className="verified">
    <div className="verified-badge">
        <div className="photo-verified">
            <img src={Bus}></img>
        </div>
        <div className="badge">
            <div className="badge-photo">
               <div className="icon"> <MdOutlineVerifiedUser/></div>
                <div className="text-icon"><p > Delivering through the best <br></br> <span>secure logistics solutions</span></p> </div>
            </div>
        </div>
         <div className="button-footer-top-right">
 <button>learn more</button>
    </div>
    </div>
</div>
    </div>
    <div className="customer-packages">
        <div className="inside-packages">
         <div className="customer-h1">
      <h1> we always follow best <br></br> <span> process</span> to deliver packages </h1>
      </div>
      <div className="customer-h2">
      <h2> Efficient cargo solutoion solution cargo for basics for basics baxics bsadis  <br></br>
      efficient cargo solution and not for apply
      </h2></div>
      <div className="packages">
            <div className="package-div1" >
                <div className="package-img">
                    <img src={Person} alt={Person}></img>
                </div>
                <div className="borderbottom">
                    <img src={Borderb} alt={Borderb}></img>
                </div>
        <div className="step">
            <p id='step1'> step 1 : </p>
            <p id='recieve'> recieve package</p>
        </div>
        <div className="package-info">
            <p> Ad auctor etiam aliquet quae placeat<br></br>
placerat justo aptent nec 
platea, mattis tenetur.</p>
        </div>
            </div>
             <div className="package-div2" >
                <div className="package-img">
                    <img src={Person} alt={Person}></img>
                </div>
                <div className="borderbottom">
                    <img src={Borderb} alt={Borderb}></img>
                </div>
        <div className="step">
            <p id='step1'> step 1 :</p>
            <p id='recieve'> recieve package</p>
        </div>
        <div className="package-info">
            <p> Ad auctor etiam aliquet quae placeat<br></br>
placerat justo aptent nec eiusmod rem,
platea.</p>
        </div>
            </div>
            <div className="package-div3">
                <div className="package-img">
                    <img src={Person} alt={Person}></img>
                </div>
                <div className="borderbottom">
                    <img src={Borderb} alt={Borderb}></img>
                </div>
        <div className="step">
            <p id='step1'> step 1 :</p>
            <p id='recieve'> recieve package</p>
        </div>
        <div className="package-info">
            <p> Ad auctor etiam aliquet quae placeat<br></br>
placerat justo aptent nec eiusmod rem,
platea.</p>
        </div>
            </div>
            
             
            </div>
            </div>
        </div>
    </>
  )
}

export default leadincom
