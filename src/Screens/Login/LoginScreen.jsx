import React, { useState, useEffect } from "react"
import {Link, useHistory} from 'react-router-dom'
import Banner from "../../Components/Banner/Banner"
import Button from "../../Components/Button/Button"
import Checkbox from "../../Components/Checkbox/Checkbox"
import InputComponent from "../../Components/Input/InputComponent"
import Logo from "../../Components/Logo/Logo"
import "./login-screen.css"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userAction'
import OauthBtn from "../../Components/OauthBtn/OauthBtn"
import { USER_LOGIN_SUCCESS } from '../../constants/userConstants'

function LoginScreen(props) {
  const {
    welcomeBack,
    rememberMe,
    text1,
    google,
    facebook
  } = props

  const [user, setUser] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const {  loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/community-page-news')
    }
  }, [history, userInfo])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')  
  const [terms, setTerms] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [userError, setUserError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  
  const userChange = (e) => {
    setUsername(e.target.value)
    setUserError(false)
     
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  const handleOnClick = (e) => {
    if (!username) setUserError(true)
    if (password.length <6) setPasswordError(true)
    if (!terms) setTermsError(true)
    return dispatch(login(username, password))
  }

  const loginWithFacebook = (e) => {
    e.preventDefault()
  }

  const loginWithGoogle = (e) => {
    e.preventDefault()
  }

  return (
    <div className="x01-0-0-login-empty">
      {/* content wrapper */}
      <div className="content-wrapper">

      {/* sign in form */}
        <form className="sign-in">
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
               name= { userError === 'NotAuthorizedException' ? "Incorrect username or password." : "Username" }
              autoFocus="autoFocus"
               />
               
               <InputComponent text={password} 
               error={passwordError} 
               image="/img/lock-outline.svg" 
               changeHandler={passwordChange}
               password="password"
               name= { passwordError === 'NotAuthorizedException' ? "Incorrect username or password."  : "Password" }
               />
            
            <div className="remember">
              <Checkbox termsError={termsError} setTermsError={setTermsError} terms={terms} setTerms={setTerms}/>
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

            <div className="oauth-container">
            <OauthBtn
            loginWithFacebook={loginWithFacebook}
            loginWithGoogle={loginWithGoogle}
            google={google}
            facebook={facebook}
            name={text1}
            />
            </div>

            <div className="signup-option">
              <p className="ibmplexsans-regular-normal-white-16px">
                <span className="span0">Don't have an account yet? </span>
              </p>
              <Link to="/register" className="span2">Become a member!</Link>
            </div>
          </div>
        </form>
        <BannerContainer />
      </div>      
    </div>
  )
}

export default LoginScreen

function BannerContainer () {
  return(
        <div className="banner-container">
          <div className="banner-images">
            <div className="overlap-group1">
              <Banner />
            </div>
          </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        </div>
  )
}
