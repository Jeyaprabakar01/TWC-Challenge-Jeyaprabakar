import "./portfolio.css";
import React from "react";
import CardRow from "../card/CardRow";
import { cardArr1 } from "../../data/CardData";
import { cardArr2 } from "../../data/CardData";

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
        <CardRow cardArr={cardArr1} />
        <CardRow cardArr={cardArr2} />
      </div>
    </div>
  );
};

export default Portfolio;
