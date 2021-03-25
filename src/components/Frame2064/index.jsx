import React from "react";
import "./Frame2064.css";

function Frame2064(props) {
  const { children } = props;

  return (
    <div className="frame-2064">
      <div className="call-with-client">{children}</div>
    </div>
  );
}

export default Frame2064;
