import React from "react";
import IconsArrowsLeft from "../IconsArrowsLeft";
import "./Backbtn3.css";

function Backbtn3(props) {
  const { place, iconsArrowsLeftProps } = props;

  return (
    <div className="back-btn3">
      <a href="javascript:history.back()">
        <div className="frame-29233">
          <IconsArrowsLeft
            vectorStroke={iconsArrowsLeftProps.vectorStroke}
            vectorStroke2={iconsArrowsLeftProps.vectorStroke2}
          />
          <div className="place6 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{place}</div>
        </div>
      </a>
    </div>
  );
}

export default Backbtn3;
