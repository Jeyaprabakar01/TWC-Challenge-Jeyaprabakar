import "./card.css";
import React from "react";
import Card from "./Card";

const CardRow = (props) => {
  return (
    <div>
      <div className="card-row">
        {props.cardArr.map(({ img, title }) => {
          return <Card Img={img} Title={title} />;
        })}
      </div>
    </div>
  );
};

export default CardRow;
