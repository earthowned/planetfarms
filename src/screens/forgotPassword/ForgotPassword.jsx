import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Input from '../../components/input/Input'
import SignLayout from '../../layout/signLayout/SignLayout'
import Button from '../../components/button/Button'
import { confirmPin } from '../../actions/userAction'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'

const ForgotPassword = () => {
  const [code, setCode] = useState(null)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isVerifiedUser, setIsVerifiedUser] = useState(false)
  const dispatch = useDispatch()
  const { register: regi, errors, handleSubmit, watch } = useForm()
  const newPassword = useRef({})
  newPassword.current = watch('newPassword', '')
  const onSubmit = ({ username, newPassword }) => {
    // return dispatch(changePassword(username, password))
    console.log(username, newPassword)
  }
  const verifyUsername = ({ username }) => {
    username && setIsVerifiedUser(true)
  }
  const resendCode = (e) => {
    e.preventDefault()
    handleSubmit(verifyUsername)()
    dispatch(confirmPin())
    isVerifiedUser && console.log('code sent')
  }
  const alreadyHaveCode = (e) => {
    e.preventDefault()
    handleSubmit(verifyUsername)()
    isVerifiedUser && console.log('type code')
  }
  const sendCode = (e) => {
    e.preventDefault()
    handleSubmit(verifyUsername)()
    dispatch(confirmPin())
    isVerifiedUser && console.log('code sent')
  }
  const changePassword = (e) => {
    e.preventDefault()
    console.log('Password Changed Successfully')
  }
  const toggleNewPasswordVisibility = (e) => {
    setShowNewPassword(!showNewPassword)
  }
  const toggleConfirmPasswordVisibility = (e) => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <SignLayout>
      <form className='sign' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='welcome'>Forgot Password</h1>
        <div className='container'>
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
            ? <>
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
                <Button name='I already have code' onClick={alreadyHaveCode} />
                <Button name='Send Code' onClick={sendCode} />
              </div>
              </>
            : <div className='btnWrapper'>
              <Button name='I already have code' onClick={alreadyHaveCode} />
              <Button name='Send Code' onClick={sendCode} />
              </div>}
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
