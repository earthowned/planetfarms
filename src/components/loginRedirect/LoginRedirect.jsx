import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { socialSignInRedirect } from '../../actions/userAction'

const LoginRedirect = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(socialSignInRedirect())
  }, [])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export default LoginRedirect
