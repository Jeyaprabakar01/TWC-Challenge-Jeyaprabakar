import "./card.css";
import React from "react";
import Card from "./Card";

import Img1 from "../../assets/image-deep-earth.jpg";
import Img2 from "../../assets/image-night-arcade.jpg";
import Img3 from "../../assets/image-soccer-team.jpg";
import Img4 from "../../assets/image-grid.jpg";
import Img5 from "../../assets/image-from-above.jpg";
import Img6 from "../../assets/image-pocket-borealis.jpg";
import Img7 from "../../assets/image-curiosity.jpg";
import Img8 from "../../assets/image-fisheye.jpg";

const CardRow = () => {
  return (
    <div>
      <div className="card-row">
        <Card Img={Img1} Title="DEEP EARTH" />
        <Card Img={Img2} Title="NIGHT ARCADE" />
        <Card Img={Img3} Title="SOCCER TEAM VR" />
        <Card Img={Img4} Title="THE GRID" />
      </div>
      <div className="card-row">
        <Card Img={Img5} Title="FROM UP ABOVE VR" />
        <Card Img={Img6} Title="POCKET BOREALIS" />
        <Card Img={Img7} Title="THE CURIOSITY" />
        <Card Img={Img8} Title="MAKE IT FISHEYE" />
      </div>
    </div>
  );
};

export default CardRow;
