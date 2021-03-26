import React from "react";
import Lockoutline from "../Lockoutline";
import "./X0212SignUperror.css";

function X0212SignUperror(props) {
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
    password,
    badpassword111,
    vector10,
    vector11,
    vector12,
    passwordError,
    vector13,
    vector14,
    spanText,
    spanText2,
    spanText3,
    signUp,
    text2,
    vector15,
    vector16,
    vector17,
    vector18,
    google,
    subtract,
    facebook,
    spanText4,
    spanText5,
    spanText6,
    vector19,
    vector20,
    vector21,
    vector22,
    lockoutlineProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x02-1-2-sign-up-error screen ">
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
                <div className="frame-65 border-1px-onyx">
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
              </div>
              <div className="frame-1921">
                <div className="frame-65 border-1px-rusty-red">
                  <div className="frame-1934">
                    <Lockoutline
                      vector={lockoutlineProps.vector}
                      vector2={lockoutlineProps.vector2}
                      vector3={lockoutlineProps.vector3}
                    />
                    <div className="frame-9-1">
                      <div className="password ibmplexsans-regular-normal-monsoon-14px">{password}</div>
                      <div className="badpassword111 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                        {badpassword111}
                      </div>
                    </div>
                  </div>
                  <div className="eye">
                    <div className="overlap-group1">
                      <img className="vector-6" src={vector10} />
                      <img className="vector-7" src={vector11} />
                      <img className="vector-8" src={vector12} />
                    </div>
                  </div>
                </div>
                <div className="password-error ibmplexsans-regular-normal-rusty-red-12px">{passwordError}</div>
              </div>
              <div className="frame-1935">
                <div className="frame-11">
                  <div className="checkboxunchecked">
                    <div className="checkmark-square-2-outline-2">
                      <div className="overlap-group">
                        <img className="vector-9" src={vector13} />
                        <img className="vector-10" src={vector14} />
                      </div>
                    </div>
                  </div>
                  <p className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                    <span className="span0-5W1c1Z">{spanText}</span>
                    <span className="span1-5W1c1Z">{spanText2}</span>
                    <span className="span2-5W1c1Z">{spanText3}</span>
                  </p>
                </div>
                <div className="frame-285">
                  <div className="sign-up valign-text-middle ibmplexsans-semi-bold-shark-16px">{signUp}</div>
                </div>
              </div>
              <div className="frame-2680">
                <div className="text-2 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text2}</div>
                <div className="frame-3495">
                  <div className="frame-2678 border-0-5px-quarter-spanish-white">
                    <div className="logo-googleg-48-dp-1">
                      <div className="overlap-group-1">
                        <img className="vector-11" src={vector15} />
                        <img className="vector-12" src={vector16} />
                        <img className="vector-13" src={vector17} />
                        <img className="vector-14" src={vector18} />
                      </div>
                    </div>
                    <div className="google ibmplexsans-semi-bold-quarter-spanish-white-16px">{google}</div>
                  </div>
                  <div className="frame-2679 border-0-5px-quarter-spanish-white">
                    <img className="subtract" src={subtract} />
                    <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">{facebook}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-93 border-1px-onyx">
            <p className="text-3 ibmplexsans-semi-bold-white-16px">
              <span className="span02">{spanText4}</span>
              <span className="span12">{spanText5}</span>
              <span className="span22">{spanText6}</span>
            </p>
          </div>
        </div>
        <div className="frame-1928">
          <div className="frame-1">
            <div className="overlap-group-2">
              <img className="vector-15" src={vector19} />
              <img className="vector-16" src={vector20} />
              <img className="vector-17" src={vector21} />
              <img className="vector-18" src={vector22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X0212SignUperror;
