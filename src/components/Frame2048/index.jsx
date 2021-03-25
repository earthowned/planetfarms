import React from "react";
import "./Frame2048.css";

function Frame2048(props) {
  const { children } = props;

  return (
    <div className="frame-2048">
      <div className="nov-26 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
    </div>
  );
}

export default Frame2048;
