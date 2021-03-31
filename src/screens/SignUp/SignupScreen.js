import React,{useState} from "react";
import "./style.css";
import {useHistory, Link} from 'react-router-dom';
import Logo from "../../components/Logo/Logo";
import Banner from "../../components/Banner/Banner";
import InputComponent from "../../components/Input/InputComponent";
import Button from "../../components/Button/Button";


function App() {
  return <SignupScreen {...X0200SignUpemptyData} />;
}

export default App;


function SignupScreen(props) {
  const {
    welcomeBack,
    
   
    spanText,
    spanText2,
    spanText3,
    text2,
    
    google,
    
    facebook,
    
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [active, setActive] = useState(false);
  const [activePassword, setPasswordActive] = useState(false);
  
  const [userError, setUserError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const history = useHistory();
  
const registerUser = () => {
  if(!username) setUserError(true);

  if(!password) setPasswordError(true);

  if(!terms) setTermsError(true);

  if(username && password && terms ) {
    history.push('/register-complete');
  }
  
}

const userChange = (e) => {
  setUsername(e.target.value);
  setUserError(false);
  setActive(true);
}

const passwordChange = (e) => {
  setPassword(e.target.value);
  setPasswordError(false);
}


const changeTerms = (e) => {
  setTerms(!terms);
  setTermsError(false);
}

  return (
    <div className="x02-0-0-sign-up-empty smart-layers-pointers ">
      <div className="sign-up-form">
        <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">{welcomeBack}</h1>
        
        {/* form */}
        <div className="form-container">
          
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
               
          <div className="button-group">
            <div className="terms">
              
              <div className="checkboxunchecked">
                <input type="checkbox" value={terms} onChange={(e) => changeTerms(e)} />
              </div>
              

              <p className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">
                <span className="span0-lQtl1i">{spanText}</span>
                <span className="span1-lQtl1i">{spanText2}</span>
                <span className="span2-lQtl1i">{spanText3}</span>
              </p>
            </div>
           
            <Button clickHandler={registerUser} name="Sign Up" />
            
          </div>
           {termsError && <p className="error-message">Please read the terms of service</p>}

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
          <span className="span0-hsNx6X">Already have an Account?</span>
         
          <Link className="span2-hsNx6X" to="/"> Sign In</Link>
        </p>
      </div>

      <div className="image-wrapper">
       <Logo />
      </div>
      <div className="banner-container">
        <div className="banner-images">
          <div className="overlap-group-3">
           <Banner />
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

