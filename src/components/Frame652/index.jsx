import React from "react";
import Lockoutline2 from "../Lockoutline2";
import Eyeoffoutline22 from "../Eyeoffoutline22";
import "./Frame652.css";

function Frame652(props) {
  const { password, text3, lockoutline2Props, eyeoffoutline22Props } = props;

  return (
    <div className="frame-653 border-1px-onyx">
      <div className="frame-19342">
        <Lockoutline2
          vector={lockoutline2Props.vector}
          vector2={lockoutline2Props.vector2}
          vector3={lockoutline2Props.vector3}
        />
        <div className="frame-94">
          <div className="password2">{password}</div>
          <p className="text-3 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text3}</p>
        </div>
      </div>
      <Eyeoffoutline22
        vector={eyeoffoutline22Props.vector}
        vector2={eyeoffoutline22Props.vector2}
        vector3={eyeoffoutline22Props.vector3}
        vector4={eyeoffoutline22Props.vector4}
      />
    </div>
  );
}

export default Frame652;
