import React from "react";
import Funneloutline1 from "../Funneloutline1";
import "./Frame2817.css";

function Frame2817(props) {
  const { filterByCategory, funneloutline1Props } = props;

  return (
    <div className="frame-2817">
      <Funneloutline1 vector={funneloutline1Props.vector} vector2={funneloutline1Props.vector2} />
      <div className="filter-by-category ibmplexsans-semi-bold-quarter-spanish-white-16px">{filterByCategory}</div>
    </div>
  );
}

export default Frame2817;
