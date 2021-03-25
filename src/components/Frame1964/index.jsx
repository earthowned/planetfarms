import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame1964.css";

function Frame1964(props) {
  const { spanText, spanText2, chevronrightoutline1Props } = props;

  return (
    <div className="frame-19644">
      <div className="frame-6513 border-1px-onyx">
        <div className="select-category">
          <span className="span09">{spanText}</span>
          <span className="span19">{spanText2}</span>
        </div>
        <Chevronrightoutline1
          layer24Props={chevronrightoutline1Props.layer24Props}
          className="chevron-right-outline-1-1"
        />
      </div>
    </div>
  );
}

export default Frame1964;
