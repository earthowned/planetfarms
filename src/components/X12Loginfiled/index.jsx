import React from "react";
import { Link } from "react-router-dom";
import Frame1646 from "../Frame1646";
import Frame1928 from "../Frame1928";
import Frame4 from "../Frame4";
import Frame652 from "../Frame652";
import Frame92 from "../Frame92";
import Frame2681 from "../Frame2681";
import Frame1929 from "../Frame1929";
import "./X12Loginfiled.css";

function X12Loginfiled(props) {
  const {
    forgotPassword,
    signIn,
    spanText,
    spanText2,
    spanText3,
    frame1646Props,
    frame1928Props,
    frame4Props,
    frame652Props,
    frame92Props,
    frame2681Props,
    frame1929Props,
  } = props;

  return (
    <div className="x1-2-login-filed screen ">
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
      <div className="frame-19322">
        <div className="frame-19312">
          <Frame4 frame65Props={frame4Props.frame65Props} />
          <div className="frame-1921">
            <Frame652
              password={frame652Props.password}
              text3={frame652Props.text3}
              lockoutline2Props={frame652Props.lockoutline2Props}
              eyeoffoutline22Props={frame652Props.eyeoffoutline22Props}
            />
          </div>
          <Frame92 vector={frame92Props.vector} subtract={frame92Props.subtract} rememberMe={frame92Props.rememberMe} />
          <div className="frame-19302">
            <div className="forgot-password2 valign-text-middle">{forgotPassword}</div>
            <Link to="/3-community-page-news">
              <div className="frame-2852">
                <div className="sign-in2 valign-text-middle ibmplexsans-semi-bold-shark-16px">{signIn}</div>
              </div>
            </Link>
          </div>
          <Frame2681 {...frame2681Props} />
        </div>
        <Frame1929>{frame1929Props.children}</Frame1929>
      </div>
      <div className="frame-932 border-1px-onyx">
        <Link to="/2-1-sign-up-empty-1">
          <p className="text-5">
            <span className="span02">{spanText}</span>
            <span className="span12">{spanText2}</span>
            <span className="span22">{spanText3}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default X12Loginfiled;
