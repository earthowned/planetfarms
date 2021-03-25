import React from "react";
import Layer22 from "../Layer22";
import "./Emailoutline.css";

function Emailoutline(props) {
  const { layer22Props, className } = props;

  return (
    <div className={`email-outline ${className || ""}`}>
      <Layer22 emailProps={layer22Props.emailProps} />
    </div>
  );
}

export default Emailoutline;
