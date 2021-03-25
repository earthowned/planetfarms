import React from "react";
import Messagesquareoutline1 from "../Messagesquareoutline1";
import "./Frame28042.css";

function Frame28042(props) {
  const { address, messagesquareoutline1Props } = props;

  return (
    <div className="frame-28042">
      <Messagesquareoutline1
        vector={messagesquareoutline1Props.vector}
        vector2={messagesquareoutline1Props.vector2}
        vector3={messagesquareoutline1Props.vector3}
        vector4={messagesquareoutline1Props.vector4}
        vector5={messagesquareoutline1Props.vector5}
      />
      <div className="address7 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{address}</div>
    </div>
  );
}

export default Frame28042;
