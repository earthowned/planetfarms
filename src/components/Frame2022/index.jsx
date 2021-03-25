import React from "react";
import "./Frame2022.css";

function Frame2022(props) {
  const { children } = props;

  return (
    <div className="frame-2022">
      <div className="oct-31 ibmplexsans-semi-bold-quarter-spanish-white-16px">{children}</div>
    </div>
  );
}

export default Frame2022;
