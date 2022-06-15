import React from "react";
import Navbar from "./Navbar";
import Searchbox from "./Searchbox";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <h1>GET YOUR GAME ON</h1>
      <p>Get your venue for next sporting event.</p>
      <Searchbox />
    </div>
  );
};

export default Hero;
