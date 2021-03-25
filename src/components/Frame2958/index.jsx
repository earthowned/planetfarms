import React from "react";
import "./Frame2958.css";

function Frame2958(props) {
  const { frame2801, name, text1016, text1017 } = props;

  return (
    <div className="frame-29582">
      <div className="frame-28122">
        <div className="frame-28015" style={{ backgroundImage: `url(${frame2801})` }}></div>
        <div className="frame-28024">
          <div className="name12 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
          <p className="text-1016 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text1016}</p>
          <p className="text-1017 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1017}</p>
        </div>
      </div>
      <div className="rectangle-87510"></div>
    </div>
  );
}

export default Frame2958;
