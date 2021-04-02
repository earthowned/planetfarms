import React, { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom';
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import InputComponent from "../../Components/Input/InputComponent";
import Logo from "../../Components/Logo/Logo";
import "./login-screen.css";

function LoginScreen(props) {
  const {
    welcomeBack,
    rememberMe,
    forgotPassword,
    text1,
    google,
    facebook,
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
   const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const history = useHistory();
  
  const userChange = (e) => {
    setUsername(e.target.value);
    setUserError(false);
     
  }

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
}

  const handleOnClick = (e) => {
    
    if(!username) setUserError(true);

    if(!password) setPasswordError(true);

    if(username === "admin" && password === 'password') {
      history.push('/dashboard');
    } 
  };

  return (
    <div className="x01-0-0-login-empty">
      <div className="icons">
         <Logo />
      </div>
      <div className="overlap-group">
        <div className="banner-container">
          <div className="banner-images">
            <div className="overlap-group1">
              <Banner />
            </div>
          </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        </div>
        <div className="sign-in">
          <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">
            {welcomeBack}
          </h1>
          <div className="from-container">
            
               
               <InputComponent text={username} 
               error={userError} 
               image="../../img/person-outline.png" 
               changeHandler={userChange}
               name="username"
           
               />
               
               <InputComponent text={password} 
               error={passwordError} 
               image="../../img/lock-outline.svg" 
               changeHandler={passwordChange}
               password="password"
               name="password"
               />
            
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
             <Button name="sign in" clickHandler={handleOnClick} />
              <a href="google.com" target="_blank" className="forgot-password valign-text-middle ibmplexsans-semi-bold-caribbean-green-16px">
                Forgot Password?
              </a>
            </div>

            {/* o-auth */}
            <div className="oauth-container">
              <div className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                {text1}
              </div>
              <div className="button-1">

                <a target="_blank" href="https://google.com" className="link-btn google-button border-0-5px-quarter-spanish-white">
                  <div className="logo-googleg-48-dp-1">
                    <div className="overlap-group1-3">
                      
                      <img className="subtract-1" src="../../img/google-icon.png" />
                    </div>
                  </div>
                  <div className="google valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                    {google}
                  </div>
                </a>

                <a target="_blank" href="https://facebook.com" className="link-btn facebook-button border-0-5px-quarter-spanish-white">
                  
                  <img className="subtract-1" src="../../img/facebook-icon.png" />
                  <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                    {facebook}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-93 border-1px-onyx">
        <p className="text-2 ibmplexsans-regular-normal-white-16px">
          <span className="span0">Don't have an account yet? </span>
          <Link to="/register" className="span2">Become a member!</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;

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

