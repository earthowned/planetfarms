import React from "react";
import "./Searchoutline1.css";

function Searchoutline1(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`search-outline-1 ${className || ""}`}>
      <div className="layer-211">
        <div className="search2">
          <img className="vector-27" src={vector} />
          <img className="vector-28" src={vector2} />
        </div>
      </div>
    </div>
  );
}

export default Searchoutline1;
