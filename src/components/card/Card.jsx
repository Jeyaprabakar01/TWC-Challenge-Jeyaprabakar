import "./card.css";

import React from "react";

const Card = (props) => {
  return (
    <div className="card-img">
      <img src={props.Img} alt="" />

      <div className="card-title">{props.Title}</div>
    </div>
  );
};

export default Card;
