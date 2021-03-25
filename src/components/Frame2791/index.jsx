import React from "react";
import Group1942 from "../Group1942";
import "./Frame2791.css";

function Frame2791(props) {
  const { text108, group1942Props, className } = props;

  return (
    <div className={`frame-27913 ${className || ""}`}>
      <div className="rectangle-8599"></div>
      <Group1942 {...group1942Props} />
      <div className="frame-28512 border-1px-caribbean-green">
        <div className="text-108 valign-text-middle">{text108}</div>
      </div>
    </div>
  );
}

export default Frame2791;
