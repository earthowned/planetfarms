import React, { useState } from "react"
import "./signup-screen.css"
import { useHistory, Link } from "react-router-dom"
import Logo from "../../Components/Logo/Logo"
import Banner from "../../Components/Banner/Banner"
import InputComponent from "../../Components/Input/InputComponent"
import Button from "../../Components/Button/Button"
import Checkbox from "../../Components/Checkbox/Checkbox"

function App() {
  return <SignupScreen {...X0200SignUpemptyData} />
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
  } = props

  const history = useHistory();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [terms, setTerms] = useState(false)
  const [active, setActive] = useState(false)

  const [userError, setUserError] = useState("")
  const [termsError, setTermsError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordLengthError, setPasswordLengthError] = useState(false)

  const registerUser = () => {
    if (!username) setUserError('empty')
    if (!password) setPasswordError(true)
    if (password.length < 6) setPasswordLengthError(true)
    if (!terms) setTermsError(true)

    if (username && password && terms) {
      history.push("/register-complete", { username, password });
    }
  }

  const userChange = (e) => {
    setUsername(e.target.value)
    setUserError(false)
    setActive(true)
  };

  const passwordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  return (
    <div className="x02-0-0-sign-up-empty">

    {/* content wrapper */}
      <div className="content-wrapper">

     {/* sign in form */}
        <form className="sign-up">
                <div className="icons">
                  <Logo />
                </div>

          <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">
            {welcomeBack}
          </h1>

        {/* form */}
        <div className="form-container">
          <InputComponent
            text={username}
            error={userError}
            image="/img/user-green-outline.svg"
            changeHandler={userChange}
            name={ userError === 'UsernameExistsException' ? 'Username already exists' : "Username" }
            autoFocus="autoFocus"
          />

          <InputComponent
            text={password}
            error={passwordLengthError ? passwordLengthError : passwordError}
            image="/img/lock-outline.svg"
            changeHandler={passwordChange}
            password="password"
            name={passwordLengthError ? "Password must be greater than length 6" : "Password"}
          />

          <div className="button-group">
            <div className="button-group-container-1">
            <div className="terms">
              <Checkbox termsError={termsError} setTermsError={setTermsError} terms={terms} setTerms={setTerms}/>
              <p className="checkbox-text">
                <span className="span0-lQtl1i">{spanText}</span>
                <span className="span1-lQtl1i">{spanText2}</span>
                <span className="span2-lQtl1i">{spanText3}</span>
              </p>
            </div>
            <p className="error-message">{termsError ? "Please read the terms of service" : " "}</p>
            </div>

            <Button clickHandler={registerUser} name="Sign Up" />
          </div>
         
          

          <div className="o-auth-container">
            <div className="text-2 ibmplexsans-regular-normal-quarter-spanish-white-16px">
              {text2}
            </div>
            <div className="icon-container">
               <a
                href="https://www.facebook.com/"
                alt="facebook"
                target="_blank"
                className="link-btn facebook-button border-0-5px-quarter-spanish-white" rel="noreferrer"
              >
                <img
                  className="subtract"
                  src="/img/google-icon.svg"
                  alt="facebook-icon"
                />
                <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                  {google}
                </div>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="link-btn facebook-button border-0-5px-quarter-spanish-white" rel="noreferrer"
              >
                <img
                  className="subtract"
                  src="/img/facebook-icon.svg"
                  alt="facebook-icon"
                />
                <div className="facebook valign-text-middle ibmplexsans-semi-bold-gallery-16px">
                  {facebook}
                </div>
              </a>
            </div>
          </div>

          <div className="signup-option">
            <p className="text-3 ibmplexsans-semi-bold-white-16px">
              <span className="span0-hsNx6X">Already have an Account?</span>
            </p>
            <Link className="span2-hsNx6X" to="/">
                Sign In
              </Link>
          </div>

        </div>
      </form>
      

      <div className="banner-container">
        <div className="banner-images">
          <div className="overlap-group-3">
            <Banner />
          </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

const X0200SignUpemptyData = {
  welcomeBack: "Become a member",
  spanText: "I agree with",
  spanText2: " ",
  spanText3: "Terms of Service ",
  text2: "Sign In with services",
  google: "Google",
  subtract: "",
  facebook: "Facebook",
  spanText4: "Already have an account?"
}
