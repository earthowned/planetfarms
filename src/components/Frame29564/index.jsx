import React from "react";
import Frame28042 from "../Frame28042";
import Frame28053 from "../Frame28053";
import "./Frame29564.css";

function Frame29564(props) {
  const { frame2801, text1184, text1185, text1186, frame28042Props, frame28053Props } = props;

  return (
    <div className="frame-295611">
      <div className="frame-28034">
        <div className="frame-280110" style={{ backgroundImage: `url(${frame2801})` }}></div>
        <div className="frame-28027">
          <div className="text-1184 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
            {text1184}
          </div>
          <p className="text-1185 valign-text-middle ibmplexsans-normal-monsoon-16px">{text1185}</p>
        </div>
      </div>
      <p className="text-1186 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text1186}</p>
      <Frame28042
        address={frame28042Props.address}
        messagesquareoutline1Props={frame28042Props.messagesquareoutline1Props}
      />
      <Frame28053 address={frame28053Props.address} eyeoutline1Props={frame28053Props.eyeoutline1Props} />
      <div className="rectangle-87515"></div>
    </div>
  );
}

export default Frame29564;
