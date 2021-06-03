import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Auth, Hub } from 'aws-amplify'

import { login } from '../../actions/userAction'
import { USER_LOGIN_SUCCESS } from '../../constants/userConstants'
import { SignInSignUpData } from './SignInSignUpData'

import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import InputComponent from '../Input/InputComponent'
import OauthBtn from '../OauthBtn/OauthBtn'
import './SignInSignUp.scss'

const SignIn = () => {
  const { welcomeBack, rememberMe, text1, google, facebook } = SignInSignUpData

  const [user, setUser] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [userError, setUserError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log(event)
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData) => setUser(userData))
          break
        case 'signOut':
          setUser(null)
          break
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data)
          break
        default:
          console.log('Sign in failure')
      }
    })

    if (userInfo) {
      history.push('/community-page-news')
    }

    getUser().then((userData) => setUser(userData))
  }, [history, userInfo])

  function getUser () {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log('Not signed in'))
  }

  async function signIn (username, password) {
    try {
      const user = await Auth.signIn(username, password)
      if (user) {
        localStorage.setItem('userInfo', JSON.stringify(user))
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: user
        })
        history.push('/community-page-news')
      }
    } catch (error) {
      const code = error.code
      switch (code) {
        case 'NotAuthorizedException':
          setUserError('NotAuthorizedException')
          setPasswordError('NotAuthorizedException')
          return
        default:
          return false
      }
    }
  }

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
    if (password.length < 6) setPasswordError(true)
    if (!terms) setTermsError(true)
    return dispatch(login(username, password))
  }

  const loginWithFacebook = (e) => {
    e.preventDefault()
    Auth.federatedSignIn({ provider: 'Facebook' })
  }

  const loginWithGoogle = (e) => {
    e.preventDefault()
    Auth.federatedSignIn({ provider: 'Google' })
  }

  return (
    <form className='sign'>
      <h1 className='sign-welcome'>{welcomeBack}</h1>
      <div className='sign-container'>
        <InputComponent
          text={username}
          error={userError}
          image='/img/user-green-outline.svg'
          changeHandler={userChange}
          name={
            userError === 'NotAuthorizedException'
              ? 'Incorrect username or password.'
              : 'Username'
          }
          autoFocus='autoFocus'
        />

        <InputComponent
          text={password}
          error={passwordError}
          image='/img/lock-outline.svg'
          changeHandler={passwordChange}
          password='password'
          name={
            passwordError === 'NotAuthorizedException'
              ? 'Incorrect username or password.'
              : 'Password'
          }
        />

        <div className='sign-remember'>
          <Checkbox
            termsError={termsError}
            setTermsError={setTermsError}
            terms={terms}
            setTerms={setTerms}
          />
          <div className='sign-remember-me white16px'>{rememberMe}</div>
        </div>

        <div className='sign-btnWrapper'>
          <Button name='Sign In' clickHandler={handleOnClick} />
          <a
            href='google.com'
            target='_blank'
            className='sign-btnWrapper-fPassword  green16px'
          >
            Forgot Password?
          </a>
        </div>

        <div className='sign-oauth'>
          <OauthBtn
            loginWithFacebook={loginWithFacebook}
            loginWithGoogle={loginWithGoogle}
            google={google}
            facebook={facebook}
            name={text1}
          />
        </div>

        <div className='sign-option'>
          <p className='transparent16px'>
            <span className='sign-option-span sign-option-span-1'>
              Don't have an account yet?{' '}
            </span>
          </p>
          <Link to='/register' className='sign-option-span sign-option-span-2'>
            Become a member!
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignIn
