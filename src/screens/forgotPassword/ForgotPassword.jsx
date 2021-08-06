import React, { useState, useRef, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/input/Input'
import SignLayout from '../../layout/signLayout/SignLayout'
import Button from '../../components/button/Button'
import { USER_FORGOT_PWD_CODE_RESET } from '../../constants/userConstants'
import { forgotPassword, forgotPasswordSubmit } from '../../actions/userAction'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'

const ForgotPassword = () => {
  const [usernameValue, setUsernameValue] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const { register: regi, errors, handleSubmit, watch } = useForm()
  const newPassword = useRef({})
  newPassword.current = watch('newPassword', '')

  const { message: ErrorMessage } = useSelector((state) => state.userForgotPwdCodeMessage)

  const resendCode = (e) => {
    e.preventDefault()
    dispatch(forgotPassword(usernameValue))
  }

  const alreadyHaveCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
  }

  const sendCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username)
    dispatch(forgotPassword(username))
  }

  const verifyAccount = ({ code, confirmPassword }) => {
    dispatch(forgotPasswordSubmit(usernameValue, code, confirmPassword, history))
  }

  const toggleNewPasswordVisibility = (e) => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = (e) => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  useEffect(() => {
    dispatch({ type: USER_FORGOT_PWD_CODE_RESET })
  }, [])

  return (
    <SignLayout>
      <form className='sign'>
        <h1 className='welcome'>Forgot Password</h1>
        <div className='container'>
          {ErrorMessage && <div className={ErrorMessage.type}>{ErrorMessage.message}</div>}
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
            disabled={usernameValue}
            errors={errors}
          >
            <UserAvatar />
          </Input>
          {usernameValue
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
                <Input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder='New Password'
                  name='newPassword'
                  id='newPassword'
                  ref={regi({
                    required: {
                      value: true,
                      message: 'You must enter new password'
                    },
                    minLength: {
                      value: 8,
                      message: 'Password must be maximum 8 characters'
                    }
                  })}
                  showPassword={showNewPassword}
                  togglePasswordVisibility={toggleNewPasswordVisibility}
                  errors={errors}
                >
                  <Lock className='error-icon' />
                </Input>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  id='confirmPassword'
                  ref={regi({
                    validate: v => v === newPassword.current || 'You must retype your new password'
                  })}
                  showPassword={showConfirmPassword}
                  togglePasswordVisibility={toggleConfirmPasswordVisibility}
                  errors={errors}
                >
                  <Lock className='error-icon' />
                </Input>
                <div className='btnWrapper'>
                  <Button name='Resend Code' onClick={resendCode} />
                  <Button name='Change Password' onClick={handleSubmit(verifyAccount)} />
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

export default ForgotPassword
