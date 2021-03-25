import React from "react";
import "./Messagesquareoutline1.css";

function Messagesquareoutline1(props) {
  const { vector, vector2, vector3, vector4, vector5 } = props;

  return (
    <div className="message-square-outline-1">
      <div className="layer-223">
        <div className="message-square">
          <img className="vector-106" src={vector} />
          <img className="vector-1111" src={vector2} />
          <img className="vector-126" src={vector3} />
          <img className="vector-135" src={vector4} />
          <img className="vector-145" src={vector5} />
        </div>
      </div>
    </div>
  );
}

export default Messagesquareoutline1;
