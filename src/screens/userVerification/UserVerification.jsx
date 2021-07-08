import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/input/Input'
import SignLayout from '../../layout/signLayout/SignLayout'
import Button from '../../components/button/Button'
import { resendCodeAction, confirmPin } from '../../actions/userAction'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'
import { loadingBar } from 'aws-amplify'

const UserVerification = () => {
  const [usernameValue, setUsernameValue] = useState('')
  const [isVerifiedUser, setIsVerifiedUser] = useState(false)
  const dispatch = useDispatch()
  const { register: regi, errors, handleSubmit } = useForm()

  const userConfirmCode = useSelector((state) => state.userConfirmCode)
  const userResendCode = useSelector((state) => state.userResendCode)
  const { error: confirmErr, status: confirmStatus } = userConfirmCode
  const { error: resendErr, status: resendStatus } = userResendCode

  const verifyUsername = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
    usernameValue && setIsVerifiedUser(true)
  }
  const resendCode = () => {
    dispatch(resendCodeAction(usernameValue))
    isVerifiedUser && console.log('code sent')
  }
  const alreadyHaveCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
    usernameValue && setIsVerifiedUser(true)
    isVerifiedUser && console.log('type code')
  }
  const sendCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
    usernameValue && setIsVerifiedUser(true)
    dispatch(resendCodeAction(usernameValue))
    isVerifiedUser && console.log('code sent')
  }
  const verifyAccount = ({ code }) => {
    console.log(usernameValue, code)
    dispatch(confirmPin(usernameValue, code))
    console.log('User Account Verified Successfully')
  }

  return (
    <SignLayout>
      <form className='sign'>
        <h1 className='welcome'>Confirm Verification</h1>
        <div className='container'>
          {confirmErr && <div className='error'>{confirmErr}</div>}
          {resendErr && <div className='error'>{resendErr}</div>}
          {/* {message && <div className='error'>{message}</div>} */}

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
                    // validate: v => v === code || 'You must enter correct code'
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

export default UserVerification
