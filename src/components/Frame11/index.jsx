import React from "react";
import Checkmarksquare2outline2 from "../Checkmarksquare2outline2";
import "./Frame11.css";

function Frame11(props) {
  const { spanText, spanText2, spanText3, checkmarksquare2outline2Props } = props;

  return (
    <div className="frame-11">
      <div className="checkboxunchecked">
        <Checkmarksquare2outline2
          vector={checkmarksquare2outline2Props.vector}
          vector2={checkmarksquare2outline2Props.vector2}
        />
      </div>
      <p className="text-9 ibmplexsans-normal-quarter-spanish-white-16px">
        <span className="span05">{spanText}</span>
        <span className="span15">{spanText2}</span>
        <span className="span25">{spanText3}</span>
      </p>
    </div>
  );
}

export default Frame11;
