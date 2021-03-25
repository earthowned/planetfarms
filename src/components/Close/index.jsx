import React from "react";
import "./Close.css";

function Close(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`close ${className || ""}`}>
      <img className="vector-94" src={vector} />
      <img className="vector-104" src={vector2} />
    </div>
  );
}

export default Close;
