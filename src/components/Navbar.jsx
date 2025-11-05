import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png" 
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";
import { useRef } from "react";
import "./navbar.css"

export default function Navbar() {
  const location = useLocation();
   const navRef =useRef();
  //  const showNavbar = ()=>{
  //   navRef.current.classList.toggle("responsive-nav");
  //  }
   const[menu ,showMenu] =useState (false)
  const showNavbar = ()=>{
    showMenu (!menu)
  }
  // const [click , onClick] = useState(false);
  // const cross = () =>{
  //   navRef.current.classList.toggle
  // }

  const [Dropdown,setDropdownOpen]=useState(false);
  return (
    <>
    <nav id="navbar">
      <img src={logo} alt={logo}/>

<div id="links" className={menu ? "menu-mobile" : "menu-web"} >

      <Link
        to="/"
        style={{
          color: location.pathname === "/" ? "#F9CC0E" : "black",
        
        }}
      >
        Home
      </Link>

      <Link
        to="/about"
      
      >
        About
      </Link>
      <div className="btun"
        style={{ position: "relative" }}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button
          // style={{
          //   background: "none",
          //   border: "none",
          //   cursor: "pointer",
          //   color:"black",
          //   fontWeight: "bold",
          // }}
        >
        Pages ▼
        </button>
           {Dropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/page1">Page 1</Link></li>
              <li><Link to="/page2">Page 2</Link></li>
              <li><Link to="/page3">Page 3</Link></li>
            </ul>
          )}
      </div>
      <Link
        to="/Blog"
      
      >
        Blog
      </Link>
       <Link
        to="/Contact"
       
      >
        contact
      </Link>
      </div>

<button className="nav-btn" aria-label="Toggle navigation" onClick={showNavbar} ><IoReorderThreeSharp className="icon"/></button>


  <button className="buynow"> buy now</button>
 
    </nav>
   

    </>
  );
}
