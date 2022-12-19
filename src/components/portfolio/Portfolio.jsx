import "./portfolio.css";
import React from "react";
import CardRow from "../card/CardRow";
import { cartArr1 } from "../../data/CartData";
import { cartArr2 } from "../../data/CartData";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className="portfolio-title">OUR CREATIONS</div>
        <div className="portfolio-button">
          <button>SEE ALL</button>
        </div>
      </div>

      <div className="portfolio-card">
        <CardRow cartArr={cartArr1} />
        <CardRow cartArr={cartArr2} />
      </div>
    </div>
  );
};

export default Portfolio;
