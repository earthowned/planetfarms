import React from "react";
import Frame2817 from "../Frame2817";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame1989.css";

function Frame1989(props) {
  const { frame2817Props, chevronrightoutline1Props, className } = props;

  return (
    <div className={`frame-19893 border-1px-onyx ${className || ""}`}>
      <Frame2817
        filterByCategory={frame2817Props.filterByCategory}
        funneloutline1Props={frame2817Props.funneloutline1Props}
      />
      <Chevronrightoutline1
        layer24Props={chevronrightoutline1Props.layer24Props}
        className="chevron-right-outline-13"
      />
    </div>
  );
}

export default Frame1989;
