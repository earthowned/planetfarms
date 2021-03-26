import React, { useState } from "react";
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
import EyeOpen from "../EyeOpen";

function X21SignUpempty(props) {
  const {
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
    eyeOpenProps,
    passwordError,
  } = props;

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const handleOnClick = (e) => {
    setPassword(e.target.value);
    setUsername(e.target.value);
    if (!username || !password) {
      setError(true);
    }
  };

  return (
    <div className="x2-1-sign-up-empty-1 screen ">
      <div className="frame-19324">
        <div className="frame-19314">
          <div className="frame-43">
            <div className="frame-655 border-1px-onyx">
              <div className="frame-19333">
                <Layer2
                  personProps={layer2Props.personProps}
                  className="layer-22"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="username3 ibmplexsans-normal-monsoon-16px"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>

          {error ? (
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
                    <input
                      type="password"
                      className="password3 badpassword111 ibmplexsans-normal-quarter-spanish-white-16px"
                      placeholder="Password"
                    />
                  </div>
                </div>
                {/* <EyeOpen eyeProps={eyeOpenProps.eyeProps} /> */}
              </div>
              <div className="password-error">{passwordError}</div>
            </div>
          ) : (
            <div className="frame-19213">
              <div className="frame-65-12 border-1px-onyx">
                <div className="frame-19343">
                  <Lockoutline2
                    vector={lockoutline2Props.vector}
                    vector2={lockoutline2Props.vector2}
                    vector3={lockoutline2Props.vector3}
                    className="lock-outline3"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="password3 ibmplexsans-normal-monsoon-16px"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Eyeoffoutline22
                  vector={eyeoffoutline22Props.vector}
                  vector2={eyeoffoutline22Props.vector2}
                  vector3={eyeoffoutline22Props.vector3}
                  vector4={eyeoffoutline22Props.vector4}
                />
              </div>
            </div>
          )}

          <div className="frame-1935">
            <div className="frame-2854">
              <button
                className="sign-up valign-text-middle ibmplexsans-semi-bold-shark-16px"
                onClick={(e) => handleOnClick(e)}
              >
                SignUp
              </button>
            </div>

            <Frame11
              spanText={frame11Props.spanText}
              spanText2={frame11Props.spanText2}
              spanText3={frame11Props.spanText3}
              checkmarksquare2outline2Props={
                frame11Props.checkmarksquare2outline2Props
              }
            />
            {/* <input type="checkbox" />
            <p >I agree with <strong>Terms of Services</strong></p> */}
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
