import React from "react";
import "./Email.css";

function Email(props) {
  const { vector, vector2 } = props;

  return (
    <div className="email">
      <img className="vector-202" src={vector} />
      <img className="vector-212" src={vector2} />
    </div>
  );
}

export default Email;
