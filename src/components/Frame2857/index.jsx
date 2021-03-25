import React from "react";
import "./Frame2857.css";

function Frame2857(props) {
  const { children, className } = props;

  return (
    <div className={`frame-28572 ${className || ""}`}>
      <div className="number2 valign-text-middle ibmplexsans-bold-caribbean-green-14px">{children}</div>
      <div className="rectangle-862"></div>
      <div className="rectangle-8594"></div>
      <div className="rectangle-8603"></div>
    </div>
  );
}

export default Frame2857;
