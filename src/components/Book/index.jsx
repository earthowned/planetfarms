import React from "react";
import "./Book.css";

function Book(props) {
  const { vector, vector2, className } = props;

  return (
    <div className={`book ${className || ""}`}>
      <img className="vector-163" src={vector} />
      <img className="vector-173" src={vector2} />
    </div>
  );
}

export default Book;
