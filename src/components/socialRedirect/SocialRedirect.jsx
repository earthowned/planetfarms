import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { socialSignInRedirect } from '../../actions/userAction'

const SocialRedirect = () => {
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

export default SocialRedirect
