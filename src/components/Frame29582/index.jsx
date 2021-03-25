import React from "react";
import "./Frame29582.css";

function Frame29582(props) {
  const { frame2801, name, text1187, text1188 } = props;

  return (
    <div className="frame-29584">
      <div className="frame-28125">
        <div className="frame-280111" style={{ backgroundImage: `url(${frame2801})` }}></div>
        <div className="frame-28028">
          <div className="name15 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
          <p className="text-1187 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text1187}</p>
          <p className="text-1188 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1188}</p>
        </div>
      </div>
      <div className="rectangle-87516"></div>
    </div>
  );
}

export default Frame29582;
