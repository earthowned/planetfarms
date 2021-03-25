import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn4.css";

function Backbtn4(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn4">
      <a href="javascript:history.back()">
        <div className="frame-29234">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place7 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn4;
