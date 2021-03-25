import React from "react";
import "./Pdf1.css";

function Pdf1(props) {
  const { group, vector, vector2 } = props;

  return (
    <div className="pdf-1">
      <div className="group6" style={{ backgroundImage: `url(${group})` }}>
        <img className="vector-1112" src={vector} />
        <img className="vector-1210" src={vector2} />
      </div>
    </div>
  );
}

export default Pdf1;
