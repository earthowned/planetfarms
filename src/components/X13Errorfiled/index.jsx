import React from "react";
import { Link } from "react-router-dom";
import Frame1646 from "../Frame1646";
import Frame1928 from "../Frame1928";
import Frame1933 from "../Frame1933";
import Frame652 from "../Frame652";
import Frame92 from "../Frame92";
import Frame2681 from "../Frame2681";
import Frame1929 from "../Frame1929";
import "./X13Errorfiled.css";

function X13Errorfiled(props) {
  const {
    usernameError,
    forgotPassword,
    signIn,
    spanText,
    spanText2,
    spanText3,
    frame1646Props,
    frame1928Props,
    frame1933Props,
    frame652Props,
    frame92Props,
    frame2681Props,
    frame1929Props,
  } = props;

  return (
    <div className="x1-3-error-filed screen ">
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
      <div className="frame-19323">
        <div className="frame-19313">
          <Link to="/1-2-login-filed">
            <div className="frame-42">
              <div className="frame-654">
                <Frame1933
                  username={frame1933Props.username}
                  mikhail={frame1933Props.mikhail}
                  layer2Props={frame1933Props.layer2Props}
                  className="frame-19332"
                />
              </div>
              <div className="username-error">{usernameError}</div>
            </div>
          </Link>
          <Link to="/1-2-login-filed">
            <div className="frame-19212">
              <Frame652
                password={frame652Props.password}
                text3={frame652Props.text3}
                lockoutline2Props={frame652Props.lockoutline2Props}
                eyeoffoutline22Props={frame652Props.eyeoffoutline22Props}
              />
            </div>
          </Link>
          <Frame92
            vector={frame92Props.vector}
            subtract={frame92Props.subtract}
            rememberMe={frame92Props.rememberMe}
            className="frame-923"
          />
          <div className="frame-19303">
            <div className="forgot-password3 valign-text-middle">{forgotPassword}</div>
            <div className="frame-2853">
              <div className="sign-in3 valign-text-middle ibmplexsans-semi-bold-shark-16px">{signIn}</div>
            </div>
          </div>
          <Frame2681 {...frame2681Props} className="frame-26812" />
        </div>
        <Frame1929>{frame1929Props.children}</Frame1929>
      </div>
      <div className="frame-933 border-1px-onyx">
        <Link to="/2-1-sign-up-empty-1">
          <p className="text-8">
            <span className="span03">{spanText}</span>
            <span className="span13">{spanText2}</span>
            <span className="span23">{spanText3}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default X13Errorfiled;
