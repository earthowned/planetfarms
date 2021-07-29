import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { login, socialSignIn } from '../../actions/userAction'
import { USER_LOGIN_SUCCESS } from '../../constants/userConstants'
import { SignInSignUpData } from './SignInSignUpData'
import { Auth } from 'aws-amplify'

import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'
import Input from '../input/Input'
import OAuthBtn from '../oAuthBtn/OAuthBtn'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'
import './SignInSignUp.scss'
import { listUserCommunities, visitCommunity } from '../../actions/communityActions'

const SignIn = () => {
  const { welcomeBack, rememberMe, text1, google, facebook, failMessage } =
    SignInSignUpData

  const [user, setUser] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { currentCommunity } = useSelector((state) => state.activeCommunity)

  const { loading, error, userInfo } = userLogin
  const { register: regi, errors, handleSubmit } = useForm()

  const [terms, setTerms] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  useEffect(async () => {
    const response = await Auth.currentAuthenticatedUser()
    console.log(response)
    if (response) history.push('/redirect')
  }, [])

  useEffect(() => {
    /* Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then((userData) => setUser(userData));
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
        default:
          console.log("Sign in failure");
      }
    }); */

    if (userInfo) {
      if (currentCommunity) {
        return dispatch(visitCommunity(currentCommunity.id))
      }
    }

    // getUser().then((userData) => setUser(userData));
  }, [history, userInfo, dispatch])

  function getUser () {
    /* return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in")); */
  }

  // async function signIn(username, password) {
  //   try {
  //     const user = await Auth.signIn(username, password);
  //     if (user) {
  //       localStorage.setItem("userInfo", JSON.stringify(user));
  //       dispatch({
  //         type: USER_LOGIN_SUCCESS,
  //         payload: user,
  //       });
  //       history.push("/community-page-news");
  //     }
  //   } catch (error) {
  //     const code = error.code;
  //     switch (code) {
  //       case "NotAuthorizedException":
  //         setUserError("NotAuthorizedException");
  //         setPasswordError("NotAuthorizedException");
  //         return;
  //       default:
  //         return false;
  //     }
  //   }
  // }

  const loginWithFacebook = (e) => {
    e.preventDefault()
    dispatch(socialSignIn('Facebook'))
  }

  const loginWithGoogle = (e) => {
    e.preventDefault()
    dispatch(socialSignIn('Google'))
  }

  const onSubmit = ({ username, password }) => {
    dispatch(login(username, password))
  }

  return (
    <form className='sign'>
      <h1 className='welcome'>Sign In</h1>
      <div className='container'>
        {error && <div className='error'>{error}</div>}

        <Input
          placeholder='Username'
          type='text'
          name='username'
          id='username'
          ref={regi({
            required: {
              value: true,
              message: 'You must enter username'
            }
          })}
          errors={errors}
        >
          <UserAvatar />
        </Input>

        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          name='password'
          id='password'
          ref={regi({
            required: {
              value: true,
              message: 'You must enter password'
            }
          })}
          errors={errors}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
        >
          <Lock className='error-icon' />
        </Input>

        <div className='remember'>
          <Checkbox
            label={rememberMe}
          />
        </div>

        <div className='btnWrapper'>
          <Button name='Sign In' onClick={handleSubmit(onSubmit)} />
          <Link to='/forgot-password' className='fPassword green16px'>
            Forgot Password?
          </Link>
        </div>

        <div className='oauth'>
          <OAuthBtn
            loginWithFacebook={loginWithFacebook}
            loginWithGoogle={loginWithGoogle}
            google={google}
            facebook={facebook}
            name={text1}
          />
        </div>

        <div className='option'>
          <p className='transparent16px'>
            <span className='span span-1'>Don't have an account yet? </span>
          </p>
          <Link to='/register' className='span span-2'>
            Become a member!
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignIn
