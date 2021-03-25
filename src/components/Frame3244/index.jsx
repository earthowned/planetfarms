import React from "react";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import "./Frame3244.css";

function Frame3244(props) {
  const { enterprisePhotos, chevronrightoutline1Props } = props;

  return (
    <div className="frame-3244">
      <div className="enterprise-photos valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
        {enterprisePhotos}
      </div>
      <Chevronrightoutline1
        layer24Props={chevronrightoutline1Props.layer24Props}
        className="chevron-right-outline-1-3"
      />
    </div>
  );
}

export default Frame3244;
