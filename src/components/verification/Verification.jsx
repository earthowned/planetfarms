import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/input/Input'
import SignLayout from '../../layout/signLayout/SignLayout'
import Button from '../../components/button/Button'
import { verifyCurrentUserAttribute, verifyCurrentUserAttributeSubmit } from '../../actions/userAction'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'

const Verification = ({ attr, title }) => {
  const [message, setMessage] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [isVerifiedUser, setIsVerifiedUser] = useState(false)
  const dispatch = useDispatch()
  const { register: regi, errors, handleSubmit } = useForm()

  const history = useHistory()

  const userAttrConfirmCode = useSelector((state) => state.userAttrConfirmCode)
  const userAttrResendCode = useSelector((state) => state.userAttrResendCode)
  const { error: confirmErr, status: confirmStatus } = userAttrConfirmCode
  const { error: resendErr, status: resendStatus } = userAttrResendCode

  const resendCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
    dispatch(verifyCurrentUserAttribute(attr))
  }
  const alreadyHaveCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
  }
  const sendCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
    dispatch(verifyCurrentUserAttribute(attr))
  }
  const verifyAccount = ({ code }) => {
    dispatch(verifyCurrentUserAttributeSubmit(attr, code))
  }

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [userInfo])

  useEffect(() => {
    usernameValue && setIsVerifiedUser(true)
    if (confirmStatus) {
      history.push('/myProfile')
    } else if (resendStatus) {
      setMessage('Code has been sent successfully.')
    }
  }, [confirmStatus, resendStatus, usernameValue])

  return (
    <SignLayout>
      <form className='sign'>
        <h1 className='welcome'>{title}</h1>
        <div className='container'>
          {confirmErr && <div className='error'>{confirmErr}</div>}
          {resendErr && <div className='error'>{resendErr}</div>}
          {message && <div className='message'>{message}</div>}
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
            disabled={isVerifiedUser}
            errors={errors}
          >
            <UserAvatar />
          </Input>
          {isVerifiedUser
            ? (
              <>
                <Input
                  placeholder='Code'
                  type='number'
                  name='code'
                  id='code'
                  ref={regi({
                    required: {
                      value: true,
                      message: 'You must enter code'
                    }
                  })}
                  errors={errors}
                >
                  <Lock className='error-icon' />
                </Input>
                <div className='btnWrapper'>
                  <Button name='Verify' onClick={handleSubmit(verifyAccount)} />
                  <Button name='Resend Code' onClick={handleSubmit(resendCode)} />
                </div>
              </>
              )
            : (
              <div className='btnWrapper'>
                <Button name='I already have code' onClick={handleSubmit(alreadyHaveCode)} />
                <Button name='Send Code' onClick={handleSubmit(sendCode)} />
              </div>
              )}
          <div className='option'>
            <p className='transparent16px'>
              <span className='span span-1'>Go back to </span>
            </p>
            <Link to='/login' className='span span-2'>
              Login
            </Link>
          </div>
        </div>
      </form>
    </SignLayout>
  )
}

export default Verification
