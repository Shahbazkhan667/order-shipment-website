import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Latestblog from "../components/latestblog";
import Leadincom from "../components/leadincom";
import Partnerandclient from "../components/partnerandclients";
export default function Home() {
  return (
   <>

        <HeroSection/>
       <Leadincom/>
  <Latestblog/>
  <Partnerandclient/>
        <Footer/>
       
    </>
  );
}
