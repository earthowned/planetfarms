import React, { useState } from "react";
import "./style.css";

function X0100LoginEmpty(props) {
  const {
    group,
    vector,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    welcomeBack,
    vector10,
    vector11,
    vector12,
    username,
    password,
    vector13,
    subtract,
    rememberMe,
    forgotPassword,
    text1,
    vector14,
    vector15,
    vector16,
    vector17,
    google,
    subtract2,
    facebook,
    spanText,
    spanText2,
    spanText3,
    lockoutlineProps,
    eyeoffoutline2Props,
    defaultButtonProps,
  } = props;

  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState(false);

  const handleOnClick = (e) => {
    if (name === "admin@gmail.com" && pass === "123456789") {
      setError(false)
    } else {
      setError(true);
    }
  };

  return (
    <div className="x01-0-0-login-empty">
      <div className="icons">
        {/* <img className="group" src={group} /> */}
        <img className="vector-1" src={vector} />
        <img className="vector-2" src={vector2} />
        <img className="vector-1" src={vector3} />
        <img className="vector-2" src={vector4} />
        <img className="vector-2" src={vector5} />
        <img className="vector-2" src={vector6} />
      </div>
      <div className="overlap-group">
        <div className="banner-container">
          <div className="banner-images">
            <div className="overlap-group1">
              <img className="vector" src={vector} />
              <img className="vector-3" src={vector9} />
              <img className="vector-4" src={vector7} />
              <img className="vector-5" src={vector8} />
            </div>
          </div>
        </div>
        <div className="sign-in">
          <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">
            {welcomeBack}
          </h1>
          <div className="from-container">
            {error ? (
              <>
              <div className="error-filled-password-input border-1px-rusty-red">
                <div className="person-outline">
                  <img className="vector-6" src={vector10} />
                  <img className="vector-7" src={vector11} />
                  <img className="vector-8" src={vector12} />
                </div>
                {/* <div className="frame-9"> */}
                <input
                  type="text"
                  className="username ibmplexsans-regular-normal-monsoon-16px"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                
                {/* </div> password-default border-1px-onyx */}
              </div>
               <div className="username-error ibmplexsans-regular-normal-rusty-red-12px">User Name Error</div>
               </>
            ) : (
              <div className="default-input border-1px-onyx">
                <div className="person-outline">
                  <img className="vector-6" src={vector10} />
                  <img className="vector-7" src={vector11} />
                  <img className="vector-8" src={vector12} />
                </div>
                <input
                  type="text"
                  className="username ibmplexsans-regular-normal-monsoon-16px"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className={error ? "error-filled-password-input border-1px-rusty-red" : "password-default border-1px-onyx"}>
              <div className="frame-1934">
                <Lockoutline
                  vector={lockoutlineProps.vector}
                  vector2={lockoutlineProps.vector2}
                  vector3={lockoutlineProps.vector3}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="password ibmplexsans-regular-normal-monsoon-16px"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <Eyeoffoutline2
                vector={eyeoffoutline2Props.vector}
                vector2={eyeoffoutline2Props.vector2}
                vector3={eyeoffoutline2Props.vector3}
                vector4={eyeoffoutline2Props.vector4}
              />
            </div>
            <div className="remember">
              <div className="frame-92">
                <div className="checkmark-square-2-outline-1">
                  <div className="overlap-group1-2">
                    {/* <img className="vector-16" src={vector13} />
                    <img className="subtract" src={subtract} /> */}

                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="remember-me ibmplexsans-semi-bold-quarter-spanish-white-16px">
                {rememberMe}
              </div>
            </div>
            <div className="button">
              <div className="default-button">
                <button
                  type="submit"
                  className="default-i166454252 valign-text-middle ibmplexsans-semi-bold-shark-16px"
                  onClick={(e) => handleOnClick(e)}
                >
                  Sign In
                </button>
              </div>
              <div className="forgot-password valign-text-middle ibmplexsans-semi-bold-caribbean-green-16px">
                {forgotPassword}
              </div>
            </div>
            <div className="oauth-container">
              <div className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                {text1}
              </div>
              <div className="button-1">
                <div className="google-button border-0-5px-quarter-spanish-white">
                  <div className="logo-googleg-48-dp-1">
                    <div className="overlap-group1-3">
                      <img className="vector-17" src={group} />
                    </div>
                  </div>
                  <div className="google ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    {google}
                  </div>
                </div>
                <div className="facebook-button border-0-5px-quarter-spanish-white">
                  <img className="subtract-1" src={subtract2} />
                  <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                    {facebook}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-93 border-1px-onyx">
        <p className="text-2 ibmplexsans-regular-normal-white-16px">
          <span className="span0">{spanText}</span>
          <span className="span1">{spanText2}</span>
          <span className="span2">{spanText3}</span>
        </p>
      </div>
    </div>
  );
}

export default X0100LoginEmpty;

function Lockoutline(props) {
  const { vector, vector2, vector3 } = props;

  return (
    <div className="lock-outline">
      <div className="overlap-group1-1">
        <img className="vector-9" src={vector} />
        <img className="vector-10" src={vector2} />
        <img className="vector-11" src={vector3} />
      </div>
    </div>
  );
}

function Eyeoffoutline2(props) {
  const { vector, vector2, vector3, vector4 } = props;

  return (
    <div className="eye-off-outline-2">
      <div className="overlap-group2">
        <img className="vector-12" src={vector} />
        <img className="vector-13" src={vector2} />
        <img className="vector-14" src={vector3} />
        <img className="vector-15" src={vector4} />
      </div>
    </div>
  );
}

function DefaultButton(props) {
  const { children } = props;

  return (
    <div className="default-button">
      <div className="default-i166454252 valign-text-middle ibmplexsans-semi-bold-shark-16px">
        {children}
      </div>
    </div>
  );
}
const lockoutlineData = {
  vector: "",
  vector2: "",
  vector3: "",
};

const eyeoffoutline2Data = {
  vector: "",
  vector2: "",
  vector3: "",
  vector4: "",
};

const defaultButtonData = {
  children: "Sign In",
};

// const X0100LoginEmptyData = {
//     group: "",
//     vector: "",
//     vector2: "",
//     vector3: "",
//     vector4: "",
//     vector5: "",
//     vector6: "",
//     vector7: "",
//     vector8: "",
//     vector9: "",
//     welcomeBack: "Sign In",
//     vector10: "",
//     vector11: "",
//     vector12: "",
//     username: "Username",
//     password: "Password",
//     vector13: "",
//     subtract: "",
//     rememberMe: "Remember Me",
//     forgotPassword: "Forgot Password?",
//     text1: "Sign In with services",
//     vector14: "",
//     vector15: "",
//     vector16: "",
//     vector17: "",
//     google: "Google",
//     subtract2: "",
//     facebook: "Facebook",
//     spanText: "Don't have an account yet?",
//     spanText2: "  ",
//     spanText3: "Become a member!",
//     lockoutlineProps: lockoutlineData,
//     eyeoffoutline2Props: eyeoffoutline2Data,
//     defaultButtonProps: defaultButtonData,
// };
