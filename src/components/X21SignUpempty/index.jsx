import React from "react";
import { Link } from "react-router-dom";
import Layer2 from "../Layer2";
import Lockoutline2 from "../Lockoutline2";
import Eyeoffoutline22 from "../Eyeoffoutline22";
import Frame11 from "../Frame11";
import Frame2681 from "../Frame2681";
import Frame19292 from "../Frame19292";
import Frame1646 from "../Frame1646";
import Frame1928 from "../Frame1928";
import "./X21SignUpempty.css";

function X21SignUpempty(props) {
  const {
    username,
    password,
    signUp,
    spanText,
    spanText2,
    spanText3,
    layer2Props,
    lockoutline2Props,
    eyeoffoutline22Props,
    frame11Props,
    frame2681Props,
    frame19292Props,
    frame1646Props,
    frame1928Props,
  } = props;

  return (
    <div className="x2-1-sign-up-empty-1 screen ">
      <div className="frame-19324">
        <div className="frame-19314">
          <Link to="/2-2-sign-up-filled">
            <div className="frame-43">
              <div className="frame-655 border-1px-onyx">
                <div className="frame-19333">
                  <Layer2 personProps={layer2Props.personProps} className="layer-22" />
                  <div className="username3 ibmplexsans-normal-monsoon-16px">{username}</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/2-2-sign-up-filled">
            <div className="frame-19213">
              <div className="frame-65-12 border-1px-onyx">
                <div className="frame-19343">
                  <Lockoutline2
                    vector={lockoutline2Props.vector}
                    vector2={lockoutline2Props.vector2}
                    vector3={lockoutline2Props.vector3}
                    className="lock-outline3"
                  />
                  <div className="password3 ibmplexsans-normal-monsoon-16px">{password}</div>
                </div>
                <Eyeoffoutline22
                  vector={eyeoffoutline22Props.vector}
                  vector2={eyeoffoutline22Props.vector2}
                  vector3={eyeoffoutline22Props.vector3}
                  vector4={eyeoffoutline22Props.vector4}
                />
              </div>
            </div>
          </Link>
          <div className="frame-1935">
            <Link to="/21-sign-up-empty">
              <div className="frame-2854">
                <div className="sign-up valign-text-middle ibmplexsans-semi-bold-shark-16px">{signUp}</div>
              </div>
            </Link>
            <Frame11
              spanText={frame11Props.spanText}
              spanText2={frame11Props.spanText2}
              spanText3={frame11Props.spanText3}
              checkmarksquare2outline2Props={frame11Props.checkmarksquare2outline2Props}
            />
          </div>
          <Frame2681 {...frame2681Props} className="frame-26802" />
        </div>
        <Frame19292>{frame19292Props.children}</Frame19292>
      </div>
      <div className="frame-934 border-1px-onyx">
        <Link to="/1-1-login-empty">
          <p className="text-11">
            <span className="span04">{spanText}</span>
            <span className="span14">{spanText2}</span>
            <span className="span24">{spanText3}</span>
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

export default X21SignUpempty;
