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
import OauthBtn from '../OauthBtn/OauthBtn'
import Input from '../Input/Input'
import useToggleOnFocus from '../../utils/useToggleOnFocus'
import './SignInSignUp.scss'

const SignIn = () => {
  const { welcomeBack, spanText, spanText3, text2, google, facebook, signIn } =
    SignInSignUpData

  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  const [terms, setTerms] = useState(false)

  const [termsError, setTermsError] = useState(false)
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/register-complete')
    }
  }, [history, userInfo])

  const onSubmit = ({ username, password }) => {
    return dispatch(register(username, password))
  }

  const { show, eventHandlers } = useToggleOnFocus()

  return (
    <form className='sign' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='welcome'>{welcomeBack}</h1>
      <div className='container'>
        <Input
          placeholder='Username'
          type='text'
          image='/img/user-green-outline.svg'
          name='username'
          id='username'
          autoFocus='autoFocus'
          ref={register({
            required: {
              value: true,
              message: 'You must enter username'
            }
          })}
          errors={errors}
          show={show}
          eventHandlers={eventHandlers}
        />

        <Input
          type='password'
          placeholder='Password'
          image='/img/lock-outline.svg'
          name='password'
          id='password'
          ref={register({
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
          show={show}
          eventHandlers={eventHandlers}
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
              <Button name='Sign Up' />
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
