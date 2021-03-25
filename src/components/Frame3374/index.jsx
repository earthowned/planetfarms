import React from "react";
import "./Frame3374.css";

function Frame3374(props) {
  const { frame2904, text238, name, phone, className } = props;

  return (
    <div className={`frame-3374 ${className || ""}`}>
      <div className="frame-2904" style={{ backgroundImage: `url(${frame2904})` }}></div>
      <p className="text-238 ibmplexsans-normal-monsoon-16px">{text238}</p>
      <div className="name2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
      <div className="phone5">{phone}</div>
      <div className="rectangle-875"></div>
    </div>
  );
}

export default Frame3374;
