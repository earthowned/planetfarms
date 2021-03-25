import React from "react";
import { Link } from "react-router-dom";
import Frame4 from "../Frame4";
import Lockoutline2 from "../Lockoutline2";
import Eyeoffoutline22 from "../Eyeoffoutline22";
import Frame11 from "../Frame11";
import Frame2681 from "../Frame2681";
import Frame19292 from "../Frame19292";
import Frame1646 from "../Frame1646";
import Frame1928 from "../Frame1928";
import "./X22SignUpfilled.css";

function X22SignUpfilled(props) {
  const {
    password,
    text26,
    signUp,
    spanText,
    spanText2,
    spanText3,
    frame4Props,
    lockoutline2Props,
    eyeoffoutline22Props,
    frame11Props,
    frame2681Props,
    frame19292Props,
    frame1646Props,
    frame1928Props,
  } = props;

  return (
    <div className="x2-2-sign-up-filled screen ">
      <div className="frame-19326">
        <div className="frame-19316">
          <Frame4 frame65Props={frame4Props.frame65Props} />
          <div className="frame-19215">
            <div className="frame-657 border-1px-onyx">
              <div className="frame-19345">
                <Lockoutline2
                  vector={lockoutline2Props.vector}
                  vector2={lockoutline2Props.vector2}
                  vector3={lockoutline2Props.vector3}
                />
                <div className="frame-96">
                  <div className="password5">{password}</div>
                  <p className="text-26 ibmplexsans-normal-quarter-spanish-white-16px">{text26}</p>
                </div>
              </div>
              <Eyeoffoutline22
                vector={eyeoffoutline22Props.vector}
                vector2={eyeoffoutline22Props.vector2}
                vector3={eyeoffoutline22Props.vector3}
                vector4={eyeoffoutline22Props.vector4}
              />
            </div>
          </div>
          <div className="frame-19353">
            <Link to="/2-1-sign-up-filed">
              <div className="frame-2856">
                <div className="sign-up3 valign-text-middle ibmplexsans-semi-bold-shark-16px">{signUp}</div>
              </div>
            </Link>
            <Frame11
              spanText={frame11Props.spanText}
              spanText2={frame11Props.spanText2}
              spanText3={frame11Props.spanText3}
              checkmarksquare2outline2Props={frame11Props.checkmarksquare2outline2Props}
            />
          </div>
          <Frame2681 {...frame2681Props} className="frame-26804" />
        </div>
        <Frame19292>{frame19292Props.children}</Frame19292>
      </div>
      <div className="frame-936 border-1px-onyx">
        <Link to="/1-1-login-empty">
          <p className="text-29">
            <span className="span07">{spanText}</span>
            <span className="span17">{spanText2}</span>
            <span className="span27">{spanText3}</span>
          </p>
        </Link>
      </div>
      <Frame1646
        group={frame1646Props.group}
        vector={frame1646Props.vector}
        vector2={frame1646Props.vector2}
        vector3={frame1646Props.vector3}
        vector4={frame1646Props.vector4}
        vector5={frame1646Props.vector5}
      />
      <Frame1928
        vector={frame1928Props.vector}
        vector2={frame1928Props.vector2}
        vector3={frame1928Props.vector3}
        vector4={frame1928Props.vector4}
      />
    </div>
  );
}

export default X22SignUpfilled;
