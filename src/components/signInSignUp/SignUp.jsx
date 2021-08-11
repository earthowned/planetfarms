import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { register } from '../../actions/userAction'
import { USER_LOGIN_SUCCESS } from '../../constants/userConstants'
import { SignInSignUpData } from './SignInSignUpData'

import PhoneNumber from './PhoneNumber'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'
import OAuthBtn from '../oAuthBtn/OAuthBtn'
import Input from '../input/Input'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'
import { ReactComponent as Email } from '../../assets/images/email.svg'
import { ReactComponent as Phone } from '../../assets/images/phone-call-outline.svg'
import './SignInSignUp.scss'

const SignIn = () => {
  const {
    welcomeBack,
    spanText,
    text2,
    google,
    facebook,
    signIn,
    failMessage
  } = SignInSignUpData

  const history = useHistory()
  const { register: regi, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [checkType, setCheckType] = useState('')
  const [value, setValue] = useState('')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const onSubmit = ({ username, password }) => {
    const phone = checkType === 'number' && value ? value + username : null
    const email = checkType === 'email' ? username : null
    username =
      checkType === 'username'
        ? username
        : Math.random().toString(36).substring(3, 6) + new Date().getTime()
    return dispatch(register(username, phone, email, password))
  }
  useEffect(() => {
    const rexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    rexEmail.test(inputVal)
      ? setCheckType('email')
      : /^\d+$/.test(inputVal)
        ? setCheckType('number')
        : setCheckType('username')
  }, [inputVal])

  const inputPlaceholder =
    checkType === 'email'
      ? 'Email'
      : checkType === 'number'
        ? 'Phone Number'
        : 'Username'
  return (
    <form className='sign' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='welcome'>{welcomeBack}</h1>
      <div className='container'>
        {error && <div className='error'>{error}</div>}
        <Input
          placeholder={inputPlaceholder}
          type='text'
          name='username'
          id='username'
          autoFocus='autoFocus'
          ref={regi({
            required: {
              value: true,
              message: 'You must enter username'
            }
          })}
          errors={errors}
          onChange={(e) => setInputVal(e.target.value)}
        >
          {checkType === 'number' && value ? <span>{value}</span> : ''}
          {checkType === 'email' ? (
            <Email />
          ) : checkType === 'number' ? (
            <PhoneNumber value={value} setValue={setValue} />
          ) : (
            <UserAvatar />
          )}
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
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
          errors={errors}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
        >
          <Lock className='error-icon' />
        </Input>
        <div className='remember remember-signup'>
          <div className='signupCheckBtn'>
            <Checkbox
              label={spanText}
              name='terms'
              ref={regi({
                required: {
                  value: true,
                  message: 'Please read the terms of service'
                }
              })}
              errors={errors}
            />
            <div className='btnSignUp'>
              <Button name='Sign Up' />
            </div>
          </div>
        </div>
        <div className='oauth'>
          <OAuthBtn google={google} facebook={facebook} name={text2} />
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

// const PhoneNumber = ({ value, setValue }) => {
//   return (
//     <PhoneInput
//       international
//       defaultCountry='US'
//       value={value}
//       onChange={setValue}
//     />
//   )
// }
