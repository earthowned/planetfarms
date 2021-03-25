import React from "react";
import Frame28033 from "../Frame28033";
import Messagesquareoutline1 from "../Messagesquareoutline1";
import Frame28052 from "../Frame28052";
import Morehorizontal1 from "../Morehorizontal1";
import Frame20793 from "../Frame20793";
import Chevronrightoutline1 from "../Chevronrightoutline1";
import Frame2961 from "../Frame2961";
import "./Frame2954.css";

function Frame2954(props) {
  const {
    text1083,
    address,
    frame2801,
    name,
    text1084,
    text1085,
    mostNewest,
    frame28012,
    name2,
    spanText,
    spanText2,
    text1087,
    showMoreReplies,
    frame28033Props,
    messagesquareoutline1Props,
    frame28052Props,
    morehorizontal1Props,
    frame20793Props,
    chevronrightoutline1Props,
    frame2961Props,
  } = props;

  return (
    <div className="frame-29544 border-1px-onyx">
      <div className="frame-29569">
        <Frame28033
          frame2801={frame28033Props.frame2801}
          thinkLikeAFarmer={frame28033Props.thinkLikeAFarmer}
          text1079={frame28033Props.text1079}
        />
        <p className="text-1083 valign-text-middle inter-medium-quarter-spanish-white-16px">{text1083}</p>
        <div className="frame-28043">
          <Messagesquareoutline1
            vector={messagesquareoutline1Props.vector}
            vector2={messagesquareoutline1Props.vector2}
            vector3={messagesquareoutline1Props.vector3}
            vector4={messagesquareoutline1Props.vector4}
            vector5={messagesquareoutline1Props.vector5}
          />
          <div className="address14 valign-text-middle inter-medium-quarter-spanish-white-16px">{address}</div>
        </div>
        <Frame28052 address={frame28052Props.address} eyeoutline1Props={frame28052Props.eyeoutline1Props} />
        <div className="rectangle-875-14"></div>
        <Morehorizontal1
          vector={morehorizontal1Props.vector}
          vector2={morehorizontal1Props.vector2}
          vector3={morehorizontal1Props.vector3}
        />
        <Frame20793
          editPost={frame20793Props.editPost}
          deletePost={frame20793Props.deletePost}
          className="frame-20795"
        />
      </div>
      <div className="frame-29583">
        <div className="frame-28124">
          <div className="frame-2801-12" style={{ backgroundImage: `url(${frame2801})` }}></div>
          <div className="frame-2802-12">
            <div className="name14 valign-text-middle">{name}</div>
            <p className="text-1084 valign-text-middle inter-medium-quarter-spanish-white-16px">{text1084}</p>
            <p className="text-1085 valign-text-middle">{text1085}</p>
          </div>
        </div>
        <div className="rectangle-875-24"></div>
      </div>
      <div className="frame-29573">
        <div className="frame-28134">
          <div className="most-newest2 valign-text-middle">{mostNewest}</div>
          <Chevronrightoutline1
            layer24Props={chevronrightoutline1Props.layer24Props}
            className="chevron-right-outline-17"
          />
        </div>
      </div>
      <div className="frame-29593">
        <div className="frame-2812-12">
          <div className="frame-2801-1" style={{ backgroundImage: `url(${frame28012})` }}></div>
          <div className="frame-2802-2">
            <div className="name valign-text-middle">{name2}</div>
            <p className="text-1086">
              <span className="span019">{spanText}</span>
              <span className="span119">{spanText2}</span>
            </p>
            <p className="text-1087 valign-text-middle">{text1087}</p>
          </div>
        </div>
      </div>
      <div className="frame-29625">
        <div className="frame-2813-1">
          <div className="show-more-replies2 valign-text-middle">{showMoreReplies}</div>
        </div>
      </div>
      <div className="frame-29712">
        <Frame2961
          frame2815={frame2961Props.frame2815}
          text375={frame2961Props.text375}
          paperplaneoutline1Props={frame2961Props.paperplaneoutline1Props}
          className="frame-29612"
        />
      </div>
    </div>
  );
}

export default Frame2954;
