import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Auth, Hub } from 'aws-amplify'
import { useForm } from 'react-hook-form'

import { login, register } from '../../actions/userAction'
import { USER_LOGIN_SUCCESS } from '../../constants/userConstants'
import { SignInSignUpData } from './SignInSignUpData'

import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import InputComponent from '../Input/InputComponent'
import OauthBtn from '../OauthBtn/OauthBtn'
import './SignInSignUp.scss'

const SignIn = () => {
  const { welcomeBack, spanText, spanText3, text2, google, facebook, signIn } =
    SignInSignUpData

  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [active, setActive] = useState(false)

  const [userError, setUserError] = useState('')
  const [termsError, setTermsError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordLengthError, setPasswordLengthError] = useState(false)
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/register-complete')
    }
  }, [history, userInfo])

  const registerUser = () => {
    if (!username) setUserError('empty')
    if (!password) setPasswordError(true)
    if (password.length < 6) setPasswordLengthError(true)
    if (!terms) setTermsError(true)

    if (username && password && terms) {
      return dispatch(register(username, password))
    }
  }

  const userChange = (e) => {
    setUsername(e.target.value)
    setUserError(false)
    setActive(true)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  return (
    <form className='sign'>
      <h1 className='welcome'>{welcomeBack}</h1>
      <div className='container'>
        <InputComponent
          text={username}
          error={userError}
          image='/img/user-green-outline.svg'
          changeHandler={userChange}
          name={
            userError === 'UsernameExistsException'
              ? 'Username already exists'
              : 'Username'
          }
          autoFocus='autoFocus'
        />

        <InputComponent
          text={password}
          error={passwordLengthError || passwordError}
          image='/img/lock-outline.svg'
          changeHandler={passwordChange}
          password='password'
          name={
            passwordLengthError
              ? 'Password must be greater than length 6'
              : 'Password'
          }
        />

        <div className='remember remember-signup'>
          <div className='signupCheckBtn'>
            <div className='checkboxAndError'>
              <div className='terms'>
                <Checkbox
                  termsError={termsError}
                  setTermsError={setTermsError}
                  terms={terms}
                  setTerms={setTerms}
                />
                <div className='me white16px'>
                  {spanText} {spanText3}
                </div>
              </div>
              <p className='me-errorMsg'>
                {termsError ? 'Please read the terms of service' : ' '}
              </p>
            </div>
            <div className='btnSignUp'>
              <Button clickHandler={registerUser} name='Sign Up' />
            </div>
          </div>
        </div>

        <div className='oauth'>
          <OauthBtn google={google} facebook={facebook} name={text2} />
        </div>
        <div className='option'>
          <p className='span span-1'>Already have an Account?</p>
          <Link className='span span-2' to='/'>
            {signIn}
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignIn
