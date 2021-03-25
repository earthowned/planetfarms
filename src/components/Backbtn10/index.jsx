import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn10.css";

function Backbtn10(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn10">
      <a href="javascript:history.back()">
        <div className="frame-29239">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place13 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn10;
