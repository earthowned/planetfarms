import React from "react";
import "./ChevronsLeft.css";

function ChevronsLeft(props) {
  const { src, className } = props;

  return (
    <div className={`chevrons-left ${className || ""}`}>
      <img className="vector-stroke2" src={src} />
    </div>
  );
}

export default ChevronsLeft;
