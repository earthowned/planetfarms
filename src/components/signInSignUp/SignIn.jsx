import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../actions/userAction'
import { SignInSignUpData } from './SignInSignUpData'
import './SignInSignUp.scss'
import { visitCommunity } from '../../actions/communityActions'
import Sign from './Sign'

const SignIn = () => {
  const { welcomeBack, text1, google, facebook, noAc, signIn } =
    SignInSignUpData

  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { currentCommunity } = useSelector((state) => state.activeCommunity)

  const { loading, error, userInfo } = userLogin
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    if (userInfo) {
      if (currentCommunity) {
        return dispatch(visitCommunity(currentCommunity.id))
      }
    }
  }, [history, userInfo, dispatch])

  const onSubmit = ({ user, password }) => {
    dispatch(login(user, password))
  }

  return (
    <Sign
      onSubmit={onSubmit}
      title={signIn}
      inputVal={inputVal}
      setInputVal={setInputVal}
      welcomeBack={welcomeBack}
      google={google}
      facebook={facebook}
      noAc={noAc}
      signIn={signIn}
      error={error}
      text={text1}
      isSignUp={false}
    />
  )
}

export default SignIn
