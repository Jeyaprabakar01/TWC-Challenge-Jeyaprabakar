import "./portfolio.css";
import React from "react";
import CardRow from "../card/CardRow";

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
        <CardRow />
      </div>
    </div>
  );
};

export default Portfolio;
