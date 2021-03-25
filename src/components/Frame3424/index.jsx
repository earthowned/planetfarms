import React from "react";
import Frame2067 from "../Frame2067";
import "./Frame3424.css";

function Frame3424(props) {
  const { text359, openInCalendar, text360, phone, text361, phone2, text362, phone3 } = props;

  return (
    <div className="frame-34242">
      <div className="frame-3434">
        <p className="text-359 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text359}</p>
      </div>
      <div className="frame-3430">
        <div className="open-in-calendar ibmplexsans-semi-bold-shark-16px">{openInCalendar}</div>
      </div>
      <div className="frame-2075">
        <Frame2067 />
        <div className="text-36-1 ibmplexsans-normal-quarter-spanish-white-16px">{text360}</div>
        <div className="phone6 ibmplexsans-normal-quarter-spanish-white-16px">{phone}</div>
      </div>
      <div className="frame-3431">
        <Frame2067 />
        <p className="text-36-1 ibmplexsans-normal-quarter-spanish-white-16px">{text361}</p>
        <div className="phone-1 ibmplexsans-normal-quarter-spanish-white-16px">{phone2}</div>
      </div>
      <div className="frame-3432">
        <Frame2067 />
        <p className="text-36-1 ibmplexsans-normal-quarter-spanish-white-16px">{text362}</p>
        <div className="phone-2 ibmplexsans-normal-quarter-spanish-white-16px">{phone3}</div>
      </div>
    </div>
  );
}

export default Frame3424;
