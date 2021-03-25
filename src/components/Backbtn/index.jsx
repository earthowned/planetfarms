import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn.css";

function Backbtn(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn">
      <a href="javascript:history.back()">
        <div className="frame-2923">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place2 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn;
