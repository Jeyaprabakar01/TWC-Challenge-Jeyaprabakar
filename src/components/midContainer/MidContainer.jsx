import "./midContainer.css";

import React from "react";
import MidImg from "../../assets/image-interactive.jpg";

const MidContainer = () => {
  return (
    <div className="mid-container">
      <div className="top-left">
        <img src={MidImg} alt="" />
      </div>
      <div className="bottom-right">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <br />
        <p>
          Founded in 2011, Loopstudios has been prodcuing world-class
          <br /> virtual reality projects for some of the best companies around
          the <br />
          globe. Our award-winning creations have transformed
          <br />
          businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default MidContainer;
