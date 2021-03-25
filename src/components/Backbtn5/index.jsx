import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn5.css";

function Backbtn5(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn5">
      <a href="javascript:history.back()">
        <div className="frame-29235">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place8 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn5;
