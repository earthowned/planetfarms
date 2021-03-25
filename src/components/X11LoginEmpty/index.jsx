import React from "react";
import { Link } from "react-router-dom";
import Person from "../Person";
import Lockoutline from "../Lockoutline";
import Eyeoffoutline2 from "../Eyeoffoutline2";
import "./X11LoginEmpty.css";

function X11LoginEmpty(props) {
  const {
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    welcomeBack,
    username,
    password,
    vector7,
    subtract,
    rememberMe,
    signIn,
    forgotPassword,
    text1,
    vector8,
    vector9,
    vector10,
    vector11,
    google,
    subtract2,
    facebook,
    spanText,
    spanText2,
    spanText3,
    vector12,
    vector13,
    vector14,
    vector15,
    personProps,
    lockoutlineProps,
    eyeoffoutline2Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x1-1-login-empty screen ">
        <div className="flex-col">
          <div className="frame">
            <img className="vector" src={vector} />
            <img className="vector-1" src={vector2} />
            <img className="vector-2" src={vector3} />
            <img className="vector-1" src={vector4} />
            <img className="vector-2" src={vector5} />
            <img className="vector-2" src={vector6} />
          </div>
          <div className="frame-1932">
            <h1 className="welcome-back">{welcomeBack}</h1>
            <div className="frame-1931">
              <Link to="/1-2-login-filed">
                <div className="frame-65 border-class-3">
                  <Person vector={personProps.vector} vector2={personProps.vector2} vector3={personProps.vector3} />
                  <div className="username ibmplexsans-normal-monsoon-16px">{username}</div>
                </div>
              </Link>
              <Link to="/1-2-login-filed">
                <div className="frame-65-1 border-class-3">
                  <div className="frame-1934">
                    <Lockoutline
                      vector={lockoutlineProps.vector}
                      vector2={lockoutlineProps.vector2}
                      vector3={lockoutlineProps.vector3}
                    />
                    <div className="password ibmplexsans-normal-monsoon-16px">{password}</div>
                  </div>
                  <Eyeoffoutline2
                    vector={eyeoffoutline2Props.vector}
                    vector2={eyeoffoutline2Props.vector2}
                    vector3={eyeoffoutline2Props.vector3}
                    vector4={eyeoffoutline2Props.vector4}
                  />
                </div>
              </Link>
              <div className="frame-92">
                <div className="frame-92-1">
                  <div className="checkmark-square-2-outline-1">
                    <div className="overlap-group">
                      <img className="vector-3" src={vector7} />
                      <img className="subtract" src={subtract} />
                    </div>
                  </div>
                </div>
                <div className="remember-me ibmplexsans-semi-bold-quarter-spanish-white-16px">{rememberMe}</div>
              </div>
              <div className="frame-1930">
                <Link to="/1-3-error-filed">
                  <div className="frame-285">
                    <div className="sign-in valign-text-middle ibmplexsans-semi-bold-shark-16px">{signIn}</div>
                  </div>
                </Link>
                <div className="forgot-password valign-text-middle">{forgotPassword}</div>
              </div>
              <div className="frame-2680">
                <div className="text-1 ibmplexsans-normal-quarter-spanish-white-16px">{text1}</div>
                <div className="frame-3494">
                  <div className="frame-2678 border-0-5px-quarter-spanish-white">
                    <div className="logo-googleg-48-dp-1">
                      <div className="overlap-group-1">
                        <img className="vector-4" src={vector8} />
                        <img className="vector-5" src={vector9} />
                        <img className="vector-6" src={vector10} />
                        <img className="vector-7" src={vector11} />
                      </div>
                    </div>
                    <div className="google ibmplexsans-semi-bold-quarter-spanish-white-16px">{google}</div>
                  </div>
                  <div className="frame-2679 border-0-5px-quarter-spanish-white">
                    <img className="subtract-1" src={subtract2} />
                    <div className="facebook valign-text-middle">{facebook}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-93 border-1px-onyx">
            <Link to="/2-1-sign-up-empty-1">
              <p className="text-2">
                <span className="span0">{spanText}</span>
                <span className="span1">{spanText2}</span>
                <span className="span2">{spanText3}</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="frame-1928">
          <div className="frame-1">
            <div className="overlap-group-2">
              <img className="vector-8" src={vector12} />
              <img className="vector-9" src={vector13} />
              <img className="vector-10" src={vector14} />
              <img className="vector-11" src={vector15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X11LoginEmpty;
