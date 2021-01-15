import React, { useContext } from "react";
import { MyPortfolioContext } from "../statedata";
import PortfolioLeft from "./PortfolioLeft";
import PortfolioRight from "./PortfolioRight";
import "./Portfolio.css";
import "./PortfolioContent.css";

function Portfolio() {
  const portfolio = useContext(MyPortfolioContext);

  return (
    <section className="portfolio mt-5" id="portfolio">
      <h1>Portfolio</h1>
      <h4>check what I've been doing lately</h4>
      <div>
        <PortfolioLeft portfolio={portfolio.port1} />
        <PortfolioRight portfolio={portfolio.port2} />
        <PortfolioLeft portfolio={portfolio.port5} />
        <PortfolioRight portfolio={portfolio.port4} />
        <PortfolioRight portfolio={portfolio.port3} />
      </div>
    </section>
  );
}

export default Portfolio;
