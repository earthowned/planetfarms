import React from "react";
import "./Frame2681.css";

function Frame2681(props) {
  const { text4, vector, vector2, vector3, vector4, google, subtract, facebook, className } = props;

  return (
    <div className={`frame-2681 ${className || ""}`}>
      <div className="text-4 ibmplexsans-normal-quarter-spanish-white-16px">{text4}</div>
      <div className="frame-34942">
        <div className="frame-26782 border-0-5px-quarter-spanish-white">
          <div className="frame-26792">
            <div className="logo-googleg-48-dp-12">
              <div className="group2">
                <img className="vector-162" src={vector} />
                <img className="vector-172" src={vector2} />
                <img className="vector-182" src={vector3} />
                <img className="vector-192" src={vector4} />
              </div>
            </div>
            <div className="google2 ibmplexsans-semi-bold-quarter-spanish-white-16px">{google}</div>
          </div>
        </div>
        <div className="frame-2679-1 border-0-5px-quarter-spanish-white">
          <div className="frame-117">
            <img className="subtract3" src={subtract} />
            <div className="facebook2 valign-text-middle">{facebook}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame2681;
