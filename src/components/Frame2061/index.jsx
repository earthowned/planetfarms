import React from "react";
import "./Frame2061.css";

function Frame2061(props) {
  const { children } = props;

  return (
    <div className="frame-2061">
      <div className="engenier-meeting">{children}</div>
    </div>
  );
}

export default Frame2061;
