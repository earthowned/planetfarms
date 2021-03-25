import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn14.css";

function Backbtn14(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn14">
      <a href="javascript:history.back()">
        <div className="frame-292313">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place18 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn14;
