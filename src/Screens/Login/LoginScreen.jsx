import React, { useState} from "react";
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
      history.push('/community-page-news');
    } 
  };

  return (
    <div className="x01-0-0-login-empty">
      {/* content wrapper */}
      <div className="content-wrapper">

      {/* sign in form */}
        <div className="sign-in">
          <div className="icons">
              <Logo />
            </div>
          <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">
            {welcomeBack}
          </h1>
          
          <div className="from-container">
            
               <InputComponent text={username} 
               error={userError} 
               image="/img/user-green-outline.svg" 
               changeHandler={userChange}
               name="Username"
           
               />
               
               <InputComponent text={password} 
               error={passwordError} 
               image="/img/lock-outline.svg" 
               changeHandler={passwordChange}
               password="password"
               name="Password"
               />
            
            <div className="remember">
              <div className="frame-92">
                <div className="checkmark-square-2-outline-1">
                  <div className="overlap-group1-2">
                    
                    <input type="checkbox" id="checkbox-variation"/>

                  </div>
                </div>
              </div>
              <div className="remember-me ibmplexsans-semi-bold-quarter-spanish-white-16px">
                {rememberMe}
              </div>
            </div>

            <div className="button-wrapper">
             <Button name="Sign In" clickHandler={handleOnClick} />
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
                      
                      <img className="subtract-1" src="/img/google-icon.svg" alt="google-icon" />
                    </div>
                  </div>
                  <div className="google valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                    {google}
                  </div>
                </a>

                <a target="_blank" href="https://facebook.com" className="link-btn facebook-button border-0-5px-quarter-spanish-white">
                  
                  <img className="subtract-1" src="/img/facebook-icon.svg" alt="facebook-icon" />
                  <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                    {facebook}
                  </div>
                </a>
              </div>
            </div>

            <div className="signup-option">
              <p className="text-2 ibmplexsans-regular-normal-white-16px">
                <span className="span0">Don't have an account yet? </span>
                
              </p>
              <Link to="/register" className="span2">Become a member!</Link>
            </div>

          </div>
        </div>
        

        {/* banner-container */}
        <div className="banner-container">
          <div className="banner-images">
            <div className="overlap-group1">
              <Banner />
            </div>
          </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        </div>
        
      </div>      
    </div>
  );
}

export default LoginScreen;




