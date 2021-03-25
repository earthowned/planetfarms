import React from "react";
import "./Frame2885.css";

function Frame2885(props) {
  const { children, className } = props;

  return (
    <div className={`frame-2885 ${className || ""}`}>
      <div className="number3 valign-text-middle ibmplexsans-normal-ebb-14px">{children}</div>
      <div className="rectangle-8595"></div>
    </div>
  );
}

export default Frame2885;
