import React from "react";
import Frame2970 from "../Frame2970";
import "./Frame2798.css";

function Frame2798(props) {
  const {
    natureLovers,
    text1110,
    dueToTheAdvantage,
    frame1969,
    editGroup,
    frame2966,
    frame2967,
    frame2968,
    frame2969,
    rectangle876,
    frame2965,
    groupPhotos,
    frame2970Props,
  } = props;

  return (
    <div className="frame-27986 border-1px-onyx">
      <div className="frame-27996">
        <div className="frame-27976">
          <div className="nature-lovers3 valign-text-middle">{natureLovers}</div>
          <p className="text-1110 valign-text-middle inter-medium-quarter-spanish-white-16px">{text1110}</p>
          <div className="frame-24883">
            <div className="due-to-the-advantage4 valign-text-middle inter-medium-monsoon-16px">
              {dueToTheAdvantage}
            </div>
          </div>
        </div>
        <div className="frame-196917" style={{ backgroundImage: `url(${frame1969})` }}></div>
        <div className="frame-27967 border-1px-quarter-spanish-white">
          <div className="edit-group">{editGroup}</div>
        </div>
        <div className="rectangle-87513"></div>
      </div>
      <div className="frame-295610">
        <div className="frame-29663" style={{ backgroundImage: `url(${frame2966})` }}></div>
        <div className="frame-29673" style={{ backgroundImage: `url(${frame2967})` }}></div>
        <div className="frame-29683" style={{ backgroundImage: `url(${frame2968})` }}></div>
        <div className="frame-29693" style={{ backgroundImage: `url(${frame2969})` }}>
          <img className="rectangle-8763" src={rectangle876} />
        </div>
        <div className="frame-29653" style={{ backgroundImage: `url(${frame2965})` }}></div>
        <Frame2970 vector={frame2970Props.vector} vector2={frame2970Props.vector2} className="frame-29704" />
        <div className="frame-32442">
          <div className="group-photos valign-text-middle inter-medium-quarter-spanish-white-16px">{groupPhotos}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame2798;
