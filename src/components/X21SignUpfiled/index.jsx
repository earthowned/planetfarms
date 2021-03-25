import React from "react";
import { Link } from "react-router-dom";
import Frame19292 from "../Frame19292";
import Frame19332 from "../Frame19332";
import Frame93 from "../Frame93";
import Frame42 from "../Frame42";
import Frame1646 from "../Frame1646";
import "./X21SignUpfiled.css";

function X21SignUpfiled(props) {
  const {
    welcomeBack,
    firstName,
    mikhail,
    email,
    text30,
    text31,
    text32,
    xcontinue,
    text33,
    frame19292Props,
    frame19332Props,
    frame93Props,
    frame42Props,
    frame1646Props,
  } = props;

  return (
    <div className="x2-1-sign-up-filed screen ">
      <div className="frame-19327">
        <Frame19292 className="frame-19293">{frame19292Props.children}</Frame19292>
        <p className="welcome-back4 ibmplexsans-semi-bold-quarter-spanish-white-16px">{welcomeBack}</p>
        <div className="frame-45">
          <div className="frame-65-13 border-1px-onyx">
            <div className="frame-19334">
              <div className="frame-9-1">
                <div className="first-name">{firstName}</div>
                <div className="mikhail2 ibmplexsans-normal-quarter-spanish-white-16px">{mikhail}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-19317">
          <div className="frame-65-1 border-1px-onyx">
            <div className="frame-1933-1">
              <div className="frame-9-1">
                <div className="email2">{email}</div>
                <div className="text-30 ibmplexsans-normal-quarter-spanish-white-16px">{text30}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-1933-2">
          <div className="frame-658 border-1px-onyx">
            <Frame19332 frame9Props={frame19332Props.frame9Props} />
          </div>
        </div>
        <div className="frame-19304">
          <div className="frame-65-1 border-1px-onyx">
            <div className="frame-1933-3">
              <Frame93 lastName={frame93Props.lastName} ugrymov={frame93Props.ugrymov} />
            </div>
          </div>
        </div>
        <div className="frame-1932-1">
          <div className="frame-65-1 border-1px-onyx">
            <div className="frame-1933-4">
              <div className="frame-9-1">
                <div className="text-31">{text31}</div>
                <div className="text-32 ibmplexsans-normal-quarter-spanish-white-16px">{text32}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-3729">
          <Frame42>{frame42Props.children}</Frame42>
          <Link to="/3-community-page-news">
            <div className="frame-19354">
              <div className="continue valign-text-middle ibmplexsans-semi-bold-shark-16px">{xcontinue}</div>
            </div>
          </Link>
        </div>
        <div className="frame-317 border-1px-quarter-spanish-white">
          <p className="text-33 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text33}</p>
        </div>
      </div>
      <Frame1646
        group={frame1646Props.group}
        vector={frame1646Props.vector}
        vector2={frame1646Props.vector2}
        vector3={frame1646Props.vector3}
        vector4={frame1646Props.vector4}
        vector5={frame1646Props.vector5}
      />
    </div>
  );
}

export default X21SignUpfiled;
