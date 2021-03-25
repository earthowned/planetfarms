import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn7.css";

function Backbtn7(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn7">
      <a href="javascript:history.back()">
        <div className="frame-29237">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place11 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn7;
