import React from "react";
import Email from "../Email";
import "./Layer22.css";

function Layer22(props) {
  const { emailProps } = props;

  return (
    <div className="layer-28">
      <Email vector={emailProps.vector} vector2={emailProps.vector2} />
    </div>
  );
}

export default Layer22;
