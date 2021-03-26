import React from "react";
import Lockoutline from "../Lockoutline";
import Eyeoffoutline2 from "../Eyeoffoutline2";
import "./X0112Errorfiled.css";

function X0112Errorfiled(props) {
  const {
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    welcomeBack,
    vector7,
    vector8,
    vector9,
    username,
    mikhail,
    usernameError,
    password,
    text1,
    vector10,
    subtract,
    rememberMe,
    signIn,
    forgotPassword,
    text2,
    vector11,
    vector12,
    vector13,
    vector14,
    google,
    subtract2,
    facebook,
    spanText,
    spanText2,
    spanText3,
    vector15,
    vector16,
    vector17,
    vector18,
    lockoutlineProps,
    eyeoffoutline2Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x01-1-2-error-filed screen ">
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
            <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">{welcomeBack}</h1>
            <div className="frame-1931">
              <div className="frame-4">
                <div className="frame-65 border-1px-rusty-red">
                  <div className="person">
                    <img className="vector-3" src={vector7} />
                    <img className="vector-4" src={vector8} />
                    <img className="vector-5" src={vector9} />
                  </div>
                  <div className="frame-9">
                    <div className="username ibmplexsans-regular-normal-monsoon-14px">{username}</div>
                    <div className="mikhail ibmplexsans-regular-normal-quarter-spanish-white-16px">{mikhail}</div>
                  </div>
                </div>
                <div className="username-error ibmplexsans-regular-normal-rusty-red-12px">{usernameError}</div>
              </div>
              <div className="frame-1921">
                <div className="frame-65-1 border-1px-white">
                  <div className="frame-1934">
                    <Lockoutline
                      vector={lockoutlineProps.vector}
                      vector2={lockoutlineProps.vector2}
                      vector3={lockoutlineProps.vector3}
                    />
                    <div className="frame-9-1">
                      <div className="password ibmplexsans-regular-normal-monsoon-14px">{password}</div>
                      <p className="text-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{text1}</p>
                    </div>
                  </div>
                  <Eyeoffoutline2
                    vector={eyeoffoutline2Props.vector}
                    vector2={eyeoffoutline2Props.vector2}
                    vector3={eyeoffoutline2Props.vector3}
                    vector4={eyeoffoutline2Props.vector4}
                  />
                </div>
              </div>
              <div className="frame-92">
                <div className="frame-92-1">
                  <div className="checkmark-square-2-outline-1">
                    <div className="overlap-group">
                      <img className="vector-6" src={vector10} />
                      <img className="subtract" src={subtract} />
                    </div>
                  </div>
                </div>
                <div className="remember-me ibmplexsans-semi-bold-quarter-spanish-white-16px">{rememberMe}</div>
              </div>
              <div className="frame-1930">
                <div className="frame-285">
                  <div className="sign-in valign-text-middle ibmplexsans-semi-bold-shark-16px">{signIn}</div>
                </div>
                <div className="forgot-password valign-text-middle ibmplexsans-semi-bold-caribbean-green-16px">
                  {forgotPassword}
                </div>
              </div>
              <div className="frame-2681">
                <div className="text-2 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text2}</div>
                <div className="frame-3495">
                  <div className="frame-2678 border-0-5px-quarter-spanish-white">
                    <div className="logo-googleg-48-dp-1">
                      <div className="overlap-group-1">
                        <img className="vector-7" src={vector11} />
                        <img className="vector-8" src={vector12} />
                        <img className="vector-9" src={vector13} />
                        <img className="vector-10" src={vector14} />
                      </div>
                    </div>
                    <div className="google ibmplexsans-semi-bold-quarter-spanish-white-16px">{google}</div>
                  </div>
                  <div className="frame-2679 border-0-5px-quarter-spanish-white">
                    <img className="subtract-1" src={subtract2} />
                    <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">{facebook}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-93 border-class-1">
            <p className="text-3 ibmplexsans-regular-normal-white-16px">
              <span className="span0">{spanText}</span>
              <span className="span1">{spanText2}</span>
              <span className="span2">{spanText3}</span>
            </p>
          </div>
        </div>
        <div className="frame-1928">
          <div className="frame-1">
            <div className="overlap-group-2">
              <img className="vector-11" src={vector15} />
              <img className="vector-12" src={vector16} />
              <img className="vector-13" src={vector17} />
              <img className="vector-14" src={vector18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X0112Errorfiled;
