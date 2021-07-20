import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkAndUpdateToken } from '../../actions/userAction'
import { useDispatch } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  const hasAccess = () => {
    const userInfo = window.localStorage.getItem('userInfo')
    return userInfo && dispatch(checkAndUpdateToken())
  }
  return (
    <Route
      {...rest} render={props => (
        hasAccess()
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    />
  )
}

export default PrivateRoute
