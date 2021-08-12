import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useCheckInputType from './useCheckInputType'
import Icon from './Icon'
import OAuthBtn from '../oAuthBtn/OAuthBtn'
import Checkbox from '../checkbox/Checkbox'
import Button from '../button/Button'
import Input from '../input/Input'
import { ReactComponent as Lock } from '../../assets/images/lock-outline.svg'

const Sign = ({
  onSubmit,
  title,
  inputVal,
  setInputVal,
  spanText,
  google,
  facebook,
  haveAc,
  noAc,
  signIn,
  error,
  text,
  isSignUp,
  welcomeBack
}) => {
  const { register: regi, handleSubmit, errors } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const { checkType, inputPlaceholder } = useCheckInputType(inputVal)

  return (
    <form className='sign' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='welcome'>{title}</h1>
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
          <Icon
            checkType={checkType}
            inputVal={inputVal}
            setInputVal={setInputVal}
          />
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
        <div className='remember'>
          {isSignUp ? (
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
          ) : (
            <Checkbox label='Remember Me' />
          )}
        </div>

        <div className='btnWrapper'>
          <Button name={isSignUp ? 'Sign Up' : 'Sign In'} />
          <Link to='/forgot-password' className='fPassword green16px'>
            Forgot Password?
          </Link>
        </div>
        <div className='oauth'>
          <OAuthBtn google={google} facebook={facebook} name={text} />
        </div>
        <div className='option'>
          <p className='span span-1'>{haveAc || noAc}</p>
          <Link className='span span-2' to={isSignUp ? '/' : '/register'}>
            {welcomeBack || signIn}
          </Link>
        </div>
      </div>
    </form>
  )
}

export default Sign
