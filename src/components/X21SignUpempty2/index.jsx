import React from "react";
import { Link } from "react-router-dom";
import Frame65 from "../Frame65";
import Lockoutline2 from "../Lockoutline2";
import EyeOpen from "../EyeOpen";
import Frame11 from "../Frame11";
import Frame2681 from "../Frame2681";
import Frame19292 from "../Frame19292";
import Frame1646 from "../Frame1646";
import Frame1928 from "../Frame1928";
import "./X21SignUpempty2.css";

function X21SignUpempty2(props) {
  const {
    password,
    badpassword111,
    passwordError,
    signUp,
    spanText,
    spanText2,
    spanText3,
    frame65Props,
    lockoutline2Props,
    eyeOpenProps,
    frame11Props,
    frame2681Props,
    frame19292Props,
    frame1646Props,
    frame1928Props,
  } = props;

  return (
    <div className="x21-sign-up-empty screen ">
      <div className="frame-19325">
        <div className="frame-19315">
          <Link to="/2-2-sign-up-filled">
            <div className="frame-44">
              <Frame65 frame1933Props={frame65Props.frame1933Props} />
            </div>
          </Link>
          <Link to="/2-2-sign-up-filled">
            <div className="frame-19214">
              <div className="frame-656">
                <div className="frame-19344">
                  <Lockoutline2
                    vector={lockoutline2Props.vector}
                    vector2={lockoutline2Props.vector2}
                    vector3={lockoutline2Props.vector3}
                  />
                  <div className="frame-95">
                    <div className="password4">{password}</div>
                    <div className="badpassword111 ibmplexsans-normal-quarter-spanish-white-16px">{badpassword111}</div>
                  </div>
                </div>
                <EyeOpen eyeProps={eyeOpenProps.eyeProps} />
              </div>
              <div className="password-error">{passwordError}</div>
            </div>
          </Link>
          <div className="frame-19352">
            <div className="frame-2855">
              <div className="sign-up2 valign-text-middle ibmplexsans-semi-bold-shark-16px">{signUp}</div>
            </div>
            <Frame11
              spanText={frame11Props.spanText}
              spanText2={frame11Props.spanText2}
              spanText3={frame11Props.spanText3}
              checkmarksquare2outline2Props={frame11Props.checkmarksquare2outline2Props}
            />
          </div>
          <Frame2681 {...frame2681Props} className="frame-26803" />
        </div>
        <Frame19292>{frame19292Props.children}</Frame19292>
      </div>
      <div className="frame-935 border-1px-onyx">
        <Link to="/1-1-login-empty">
          <p className="text-14">
            <span className="span06">{spanText}</span>
            <span className="span16">{spanText2}</span>
            <span className="span26">{spanText3}</span>
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

export default X21SignUpempty2;
