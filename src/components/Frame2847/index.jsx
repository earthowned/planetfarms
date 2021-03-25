import React from "react";
import Frame1953 from "../Frame1953";
import "./Frame2847.css";

function Frame2847(props) {
  const { frame1953Props, className } = props;

  return (
    <div className={`frame-28473 ${className || ""}`}>
      <Frame1953 text37={frame1953Props.text37} usermanagementProps={frame1953Props.usermanagementProps} />
    </div>
  );
}

export default Frame2847;
