import "./hero.css";
import React from "react";
import IntroImg from "../../assets/image-hero.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="intro-img">
        <img src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
      </div>
    </div>
  );
}

export default Hero;
