import React from 'react'
import  Person from "../assets/person.png"
import  "./latestblog.css"
  import Card from "../assets/Card.png"
  import Cardb from "../assets/Cardb.png"

 import link from "../assets/link.png" 
const latestblog = () => {
  return (
    <>
    {/* <div className="check-out-reviews">
        <div className="same-row">
         <div className="review-heading">
            <div className="review-h1">
      <h1> checkout happy <br></br> <span> customers</span> reviews</h1>
      </div>
      <div className="review-h2">
      <h2> Efficient cargo solutoion solution cargo for basics  <br></br>
      efficient cargo solution and not for apply
      </h2></div>
       <div className="signup-button">
        <button> more reviews </button>
      </div>
    </div>
    <div className="testimonial" style={{ transform: "translate(0% ,20%)"}}>
        <div className="testimonial-card" >
            <div className="card-content">
                <p> Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className="review-by">
                <div className="customer-img">
<img src={link} alt={link}></img>
                </div>
                <div className="customer-name">
                    <div className="name">
                        <p> sally watson</p>

                    </div>
                    <div className="info">
                       <p>customer</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="same-row">
<div className="testimonial">
        <div className="testimonial-card">
            <div className="card-content">
                <p> Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className="review-by">
                <div className="customer-img">
<img src={link} alt={link}></img>
                </div>
                <div className="customer-name">
                    <div className="name">
                        <p> sally watson</p>

                    </div>
                    <div className="info">
                       <p>customer</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="testimonial" style={{ transform: "translate(0% ,20%)"}}>
        <div className="testimonial-card">
            <div className="card-content">
                <p> Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className="review-by">
                <div className="customer-img">
<img src={link} alt={link}></img>
                </div>
                <div className="customer-name">
                    <div className="name">
                        <p> sally watson</p>

                    </div>
                    <div className="info">
                       <p>customer</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    </div> */}
    <div className="latest-blog">
    <div className="delivery-heading">
      <h1> Latest <span> Blog</span> & Articles</h1>
      <h2> efficient cargo solutoion solution cargo for basics for basics <br></br>
      efficient cargo solution and not for apply
      </h2>
    </div>
    <div className="blog-divs">
        <div className="blog-div">
            <div className="blog-img">
                <img src={Person} alt={Person}></img>
            </div>
    <div className="blog-content">
        <h1> choosing the best  <br></br>logistics for bussines</h1>
    </div>
    <div className="blog-date">
        <p> may 15, 2024 | No comments</p>
    </div>
        </div>
         <div className="blog-div">
            <div className="blog-img">
                <img src={Person} alt={Person}></img>
            </div>
    <div className="blog-content">
        <h1> choosing the best  <br></br>logistics for bussines</h1>
    </div>
    <div className="blog-date">
        <p> may 15, 2024 | No comments</p>
    </div>
        </div>
         <div className="blog-div">
            <div className="blog-img">
                <img src={Person} alt={Person}></img>
            </div>
    <div className="blog-content">
        <h1> choosing the best  <br></br>logistics for bussines</h1>
    </div>
    <div className="blog-date">
        <p> may 15, 2024 | No comments</p>
    </div>
        </div>
    </div>
    </div>
    
    </>
  )
}
 
export default latestblog
