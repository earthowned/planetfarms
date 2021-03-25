import React from "react";
import Frame2955 from "../Frame2955";
import Frame2807 from "../Frame2807";
import Frame2808 from "../Frame2808";
import Frame2810 from "../Frame2810";
import Frame2803 from "../Frame2803";
import Frame28042 from "../Frame28042";
import Frame28052 from "../Frame28052";
import Frame29572 from "../Frame29572";
import Frame29612 from "../Frame29612";
import "./Frame3479.css";

function Frame3479(props) {
  const {
    text377,
    frame2801,
    name,
    text378,
    text379,
    frame28012,
    name2,
    spanText,
    spanText2,
    spanText3,
    text381,
    frame2955Props,
    frame2807Props,
    frame2808Props,
    frame28082Props,
    frame2810Props,
    frame2803Props,
    frame28042Props,
    frame28052Props,
    frame29572Props,
    frame29612Props,
    className,
  } = props;

  return (
    <div className={`frame-3479 ${className || ""}`}>
      <Frame2955
        frame29562Props={frame2955Props.frame29562Props}
        frame2957Props={frame2955Props.frame2957Props}
        frame2961Props={frame2955Props.frame2961Props}
      />
      <div className="frame-2801 border-1px-onyx">
        <Frame2807>{frame2807Props.children}</Frame2807>
        <Frame2808
          byDate={frame2808Props.byDate}
          chevronrightoutline1Props={frame2808Props.chevronrightoutline1Props}
        />
        <Frame2808
          byDate={frame28082Props.byDate}
          chevronrightoutline1Props={frame28082Props.chevronrightoutline1Props}
          className="frame-2809"
        />
        <Frame2810>{frame2810Props.children}</Frame2810>
      </div>
      <div className="frame-2954 border-1px-onyx">
        <div className="frame-29562">
          <Frame2803
            frame2801={frame2803Props.frame2801}
            thinkLikeAFarmer={frame2803Props.thinkLikeAFarmer}
            text373={frame2803Props.text373}
          />
          <p className="text-377 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text377}</p>
          <Frame28042
            address={frame28042Props.address}
            messagesquareoutline1Props={frame28042Props.messagesquareoutline1Props}
          />
          <Frame28052 address={frame28052Props.address} eyeoutline1Props={frame28052Props.eyeoutline1Props} />
          <div className="rectangle-875-1"></div>
        </div>
        <div className="frame-2958">
          <div className="frame-2812">
            <div className="frame-2801-1" style={{ backgroundImage: `url(${frame2801})` }}></div>
            <div className="frame-2802">
              <div className="name3 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{name}</div>
              <p className="text-378 valign-text-middle ibmplexsans-normal-quarter-spanish-white-16px">{text378}</p>
              <p className="text-379 valign-text-middle">{text379}</p>
            </div>
          </div>
          <div className="rectangle-875-2"></div>
        </div>
        <Frame29572
          mostNewest={frame29572Props.mostNewest}
          chevronrightoutline1Props={frame29572Props.chevronrightoutline1Props}
        />
        <div className="frame-2959">
          <div className="frame-2812-1">
            <div className="frame-2801-1" style={{ backgroundImage: `url(${frame28012})` }}></div>
            <div className="frame-2802-1">
              <div className="name valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{name2}</div>
              <p className="text-380">
                <span className="span011">{spanText}</span>
                <span className="span111">{spanText2}</span>
                <span className="span28">{spanText3}</span>
              </p>
              <p className="text-381 valign-text-middle">{text381}</p>
            </div>
          </div>
        </div>
        <Frame29612
          frame2815={frame29612Props.frame2815}
          text382={frame29612Props.text382}
          paperplaneoutline1Props={frame29612Props.paperplaneoutline1Props}
        />
      </div>
    </div>
  );
}

export default Frame3479;
