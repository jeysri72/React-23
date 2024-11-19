import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Portlets from "../components/Portlets";
import Footer from "../components/Footer"; 


function Home() {
  return (
    <div>
      <Header/>
      <HeroBanner />
      <Portlets />
      <Footer/>
    </div>
  );
}

export default Home;
