import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/input/Input'
import SignLayout from '../../layout/signLayout/SignLayout'
import Button from '../../components/button/Button'
import { login } from '../../actions/userAction'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const { register: regi, errors, handleSubmit } = useForm()
  const onSubmit = ({ username, password }) => {
    return dispatch(login(username, password))
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
            errors={errors}
          >
            <UserAvatar />
          </Input>

          <div className='btnWrapper'>
            <Button name='Submit' />
          </div>

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
