import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../actions/userAction'
import { SignInSignUpData } from './SignInSignUpData'
import useCheckInputType from './useCheckInputType'
import Sign from './Sign'

import './SignInSignUp.scss'

const SignIn = () => {
  const { welcomeBack, spanText, text2, google, facebook, signIn, haveAc } =
    SignInSignUpData
  const history = useHistory()
  const dispatch = useDispatch()
  const [inputVal, setInputVal] = useState('')

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  const { checkType } = useCheckInputType(inputVal)

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

  return (
    <Sign
      onSubmit={onSubmit}
      title={welcomeBack}
      inputVal={inputVal}
      setInputVal={setInputVal}
      spanText={spanText}
      google={google}
      facebook={facebook}
      haveAc={haveAc}
      signIn={signIn}
      error={error}
      text={text2}
      isSignUp
    />
  )
}

export default SignIn
