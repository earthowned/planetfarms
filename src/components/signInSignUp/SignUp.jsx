import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { register } from '../../actions/userAction'
import { SignInSignUpData } from './SignInSignUpData'

import PhoneNumber from './PhoneNumber'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'
import OAuthBtn from '../oAuthBtn/OAuthBtn'
import Input from '../input/Input'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'
import { ReactComponent as Email } from '../../assets/images/email.svg'
import './SignInSignUp.scss'

const SignIn = () => {
  const { welcomeBack, spanText, text2, google, facebook, signIn } =
    SignInSignUpData

  const history = useHistory()
  const { register: regi, handleSubmit, errors } = useForm()

  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [checkType, setCheckType] = useState('')

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

  const onSubmit = ({ user, password }) => {
    const phone = checkType === 'number' ? user : null
    const email = checkType === 'email' ? user : null
    const name =
      checkType === 'username'
        ? user
        : Math.random().toString(36).substring(3, 6) + new Date().getTime()
    return dispatch(register({ name, phone, email, password }))
  }
  useEffect(() => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    regexEmail.test(inputVal)
      ? setCheckType('email')
      : regexNumber.test(inputVal)
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
          name='user'
          autoFocus='autoFocus'
          ref={regi({
            required: {
              value: true,
              message: 'You must enter username'
            }
          })}
          errors={errors}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        >
          {checkType === 'email' ? (
            <Email />
          ) : checkType === 'number' ? (
            <PhoneNumber value={inputVal} setValue={setInputVal} />
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
