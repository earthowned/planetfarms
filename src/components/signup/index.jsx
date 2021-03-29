import React,{useState} from "react";
import "./style.css";
import {useHistory} from 'react-router-dom';


function App() {
  return <X0200SignUpempty {...X0200SignUpemptyData} />;
}

export default App;


function X0200SignUpempty(props) {
  const {
    welcomeBack,
    vector,
    vector1,
    vector2,
    vector3,
    vector4,
    vector5,
   
    spanText,
    spanText2,
    spanText3,
    text2,
    vector6,
    vector7,
    vector8,
    vector9,
    google,
    subtract,
    facebook,
    spanText4,
    spanText5,
    spanText6,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    vector17,
    vector18,
    vector19,
    lockoutlineProps,
    eyeoffoutline2Props,
    defaultButtonProps,
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const history = useHistory();
  
const registerUser = () => {
  if(!username) setUserError(true);

  if(!password) setPasswordError(true);

  if(username && password) {
    history.push('/register-complete');
  }
}

const userChange = (e) => {
  setUsername(e.target.value);
  setUserError(false);
}

const passwordChange = (e) => {
  setPassword(e.target.value);
  setPasswordError(false);
}

  return (
    <div className="x02-0-0-sign-up-empty smart-layers-pointers ">
      <div className="sign-up-form">
        <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">{welcomeBack}</h1>
        <div className="form-container">
          <div className={`default-input border-1px-onyx ${userError && "user-error"}`}>
            <div className="person-outline">
              <img className="user-icon" src="../../img/person-outline.png" />
              
            </div>
            <input 
            value={username} 
            onChange={(e) => userChange(e)} 
            className="username ibmplexsans-regular-normal-monsoon-16px"
            placeholder="username"
            ></input>
          </div>
          {userError && <p className="error-message">Username Error</p>}

              <div className={`password-default border-1px-onyx ${passwordError && "password-error"}`}>
                <div className="frame-1934">
                  <div className="lock-outline">
                      <div className="overlap-group">
                        <img className="password-icon" src="../../img/lock-outline.svg" />
                        
                      </div>
                    </div>
                  <input 
                value={password} 
                type="password"
                onChange={(e) => passwordChange(e)} 
                className="password ibmplexsans-regular-normal-monsoon-16px"
                placeholder="password"
                ></input>
                </div>
               
              </div>
               {passwordError && <p className="error-message">Password Error</p>}

          <div className="button-group">
            <div className="terms">
              <div className="checkboxunchecked">
                <input type="checkbox" />
              </div>
              <p className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                <span className="span0-lQtl1i">{spanText}</span>
                <span className="span1-lQtl1i">{spanText2}</span>
                <span className="span2-lQtl1i">{spanText3}</span>
              </p>
            </div>
            <button className="default-button" onClick={registerUser}>
                <div className="default-i166223488 valign-text-middle ibmplexsans-semi-bold-shark-16px">Sign Up</div>
              </button>
          </div>

          <div className="o-auth-container">
            <div className="text-2 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text2}</div>
            <div className="icon-container">
              <a href="www.google.com" target="_blank" className="link-btn google-button border-0-5px-quarter-spanish-white">
                <div className="logo-googleg-48-dp-1">
                  <div className="overlap-group-2">
                    <img className="vector-14" src="../../img/google-icon.png" />
                    
                  </div>
                </div>
                <div className="google ibmplexsans-semi-bold-quarter-spanish-white-16px">{google}</div>
              </a>
              <a href="www.facebook.com" target="_blank" className="link-btn facebook-button border-0-5px-quarter-spanish-white">
                <img className="subtract" src="../../img/facebook-icon.png" />
                <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">{facebook}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-in-container border-1px-onyx">
        <p className="text-3 ibmplexsans-semi-bold-white-16px">
          <span className="span0-hsNx6X">{spanText4}</span>
          <span className="span1-hsNx6X">{spanText5}</span>
          <span className="span2-hsNx6X">{spanText6}</span>
        </p>
      </div>

      <div className="image-wrapper">
        <img className="vector" src={vector} />
        <img className="vector-1" src={vector1} />
        <img className="vector-2" src={vector2} />
        <img className="vector-3" src={vector3} />
        <img className="vector-4" src={vector4} />
        <img className="vector-5" src={vector5} />
      </div>
      <div className="banner-container">
        <div className="banner-images">
          <div className="overlap-group-3">
            <img  src="../../img/BannerIcon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}


const X0200SignUpemptyData = {
    welcomeBack: "Become a member",
    vector: "../../img/Vector.png",
    vector1: "../../img/Vector1.png",
    vector2: "../../img/Vector2.png",
    vector3: "../../img/Vector3.png",
    vector4: "../../img/Vector4.png",
    vector5: "../../img/Vector5.png",
    vector6: "../../img/pIcon.png",
    vector7: "../../img/Hexa.png",
    vector8: "../../img/Hexa.png",
    vector9: "../../img/Rectangle.png",
    username: "Username",
    password: "Password",
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    text2: "Sign In with services",
    
    google: "Google",
    subtract: "",
    facebook: "Facebook",
    spanText4: "Already have an account?",
    spanText5: " ",
    spanText6: "Sign in!",
    vector10: "",
    vector11: "",
    vector12: "",
    vector13: "",
    vector14: "",
    vector15: "",
    vector16: "",
    vector17: "",
    vector18: "",
    vector19: "",
}

