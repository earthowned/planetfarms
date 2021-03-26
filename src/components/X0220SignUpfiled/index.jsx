import React from "react";
import Frame4 from "../Frame4";
import "./X0220SignUpfiled.css";

function X0220SignUpfiled(props) {
  const {
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    welcomeBack,
    welcomeBack2,
    firstName,
    mikhail,
    email,
    text1,
    birthday,
    phone,
    xcontinue,
    lastName,
    ugrymov,
    text2,
    text3,
    text4,
    frame4Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x02-2-0-sign-up-filed screen ">
        <div className="frame">
          <img className="vector" src={vector} />
          <img className="vector-1" src={vector2} />
          <img className="vector-2" src={vector3} />
          <img className="vector-1" src={vector4} />
          <img className="vector-2" src={vector5} />
          <img className="vector-2" src={vector6} />
        </div>
        <div className="frame-1932">
          <div className="flex-col">
            <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">{welcomeBack}</h1>
            <p className="welcome-back-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{welcomeBack2}</p>
            <div className="frame-">
              <div className="frame-65 border-1px-onyx">
                <div className="frame-9">
                  <div className="first-name ibmplexsans-regular-normal-monsoon-14px">{firstName}</div>
                  <div className="mikhail ibmplexsans-regular-normal-quarter-spanish-white-16px">{mikhail}</div>
                </div>
              </div>
            </div>
            <div className="frame-">
              <div className="frame-65 border-1px-onyx">
                <div className="frame-9-1">
                  <div className="email ibmplexsans-regular-normal-monsoon-14px">{email}</div>
                  <div className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text1}</div>
                </div>
              </div>
            </div>
            <div className="frame-">
              <div className="frame-65 border-1px-onyx">
                <div className="frame-9-2">
                  <div className="birthday ibmplexsans-regular-normal-monsoon-14px">{birthday}</div>
                  <div className="phone ibmplexsans-regular-normal-quarter-spanish-white-16px">{phone}</div>
                </div>
              </div>
            </div>
            <div className="frame-3729">
              <Frame4>{frame4Props.children}</Frame4>
              <div className="frame-1935">
                <div className="continue valign-text-middle ibmplexsans-semi-bold-shark-16px">{xcontinue}</div>
              </div>
            </div>
          </div>
          <div className="flex-col-1">
            <div className="frame-1930">
              <div className="frame-65 border-1px-onyx">
                <div className="frame-9-3">
                  <div className="last-name ibmplexsans-regular-normal-monsoon-14px">{lastName}</div>
                  <div className="ugrymov ibmplexsans-regular-normal-quarter-spanish-white-16px">{ugrymov}</div>
                </div>
              </div>
            </div>
            <div className="frame-">
              <div className="frame-65 border-1px-onyx">
                <div className="frame-9-4">
                  <div className="text-2 ibmplexsans-regular-normal-monsoon-14px">{text2}</div>
                  <div className="text-3 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text3}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-317 border-1px-quarter-spanish-white">
            <p className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X0220SignUpfiled;
