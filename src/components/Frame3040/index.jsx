import React from "react";
import "./Frame3040.css";

function Frame3040(props) {
  const { frame3040, farming, text735, address, className } = props;

  return (
    <div className={`frame-3040 border-1px-onyx ${className || ""}`}>
      <img className="frame-3040-12" src={frame3040} />
      <div className="frame-32393">
        <div className="frame-3321">
          <div className="farming4 valign-text-middle">{farming}</div>
          <div className="text-735 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">{text735}</div>
        </div>
        <div className="address10 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{address}</div>
      </div>
    </div>
  );
}

export default Frame3040;
