import React from "react";
import "./Person.css";

function Person(props) {
  const { vector, vector2, vector3, className } = props;

  return (
    <div className={`person ${className || ""}`}>
      <img className="vector-12" src={vector} />
      <img className="vector-13" src={vector2} />
      <img className="vector-14" src={vector3} />
    </div>
  );
}

export default Person;
