import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn13.css";

function Backbtn13(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn13">
      <a href="javascript:history.back()">
        <div className="frame-292312">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place16 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn13;
