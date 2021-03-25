import React from "react";
import Person from "../Person";
import "./Layer2.css";

function Layer2(props) {
  const { personProps, className } = props;

  return (
    <div className={`layer-2 ${className || ""}`}>
      <Person
        vector2={personProps.vector2}
        vector={personProps.vector}
        vector3={personProps.vector3}
        className="person2"
      />
    </div>
  );
}

export default Layer2;
