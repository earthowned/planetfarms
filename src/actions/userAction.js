import Amplify, { Auth } from 'aws-amplify'
import { getApi, postApi, putApi } from '../utils/apiFunc'

import FormData from 'form-data'
import {
  ACCESS_TOKEN_REQUEST,
  ACCESS_TOKEN_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_CONFIRM_CODE_REQUEST,
  USER_CONFIRM_CODE_SUCCESS,
  USER_CONFIRM_CODE_FAIL,
  USER_RESEND_CODE_REQUEST,
  USER_RESEND_CODE_SUCCESS,
  USER_RESEND_CODE_FAIL,
  USER_ATTR_CONFIRM_CODE_REQUEST,
  USER_ATTR_CONFIRM_CODE_SUCCESS,
  USER_ATTR_CONFIRM_CODE_FAIL,
  USER_ATTR_RESEND_CODE_REQUEST,
  USER_ATTR_RESEND_CODE_SUCCESS,
  USER_ATTR_RESEND_CODE_FAIL,
  USER_FORGOT_PWD_CONFIRM_CODE_REQUEST,
  USER_FORGOT_PWD_CODE_SUCCESS,
  USER_FORGOT_PWD_CODE_FAIL,
  USER_FORGOT_PWD_CODE_RESET,
  USER_FORGOT_PWD_RESEND_CODE_REQUEST,
  USER_PASSWORD_CHANGE_REQUEST,
  USER_PASSWORD_CHANGE_SUCCESS,
  USER_PASSWORD_CHANGE_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAIL,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAIL
} from '../constants/userConstants'

if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
  Amplify.configure({
    Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
    // REQUIRED - Amazon Cognito Region
      region: process.env.REACT_APP_COGNITO_REGION,
      // OPTIONAL - Amazon Cognito Federated Identity Pool Region
      // Required only if it's different from Amazon Cognito Region
      // identityPoolRegion: 'XX-XXXX-X',
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: false,
      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      /* cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
          domain: '.yourdomain.com',
      // OPTIONAL - Cookie path
          path: '/',
      // OPTIONAL - Cookie expiration in days
          expires: 365,
      // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
          sameSite: "strict" | "lax",
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
          secure: true
      }, */
      // OPTIONAL - customized storage object
      // storage: MyStorage,
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_PASSWORD_AUTH',
      // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
      // clientMetadata: { myCustomKey: 'myCustomValue' },
      // OPTIONAL - Hosted UI configuration
      oauth: {
        domain: process.env.REACT_APP_COGNITO_DOMAIN_NAME, // domain_name
        scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: process.env.FRONTEND_URL,
        redirectSignOut: process.env.FRONTEND_URL,
        responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    }
  })
}

export const register = (name, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    dispatch({ type: USER_LOGIN_REQUEST })
    let userdata
    if (process.env.REACT_APP_AUTH_METHOD !== 'cognito') {
      const { data } = await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users`, { name, password })
      userdata = data
      window.localStorage.setItem('userInfo', JSON.stringify(userdata))
    } else {
      await Auth.signUp({
        username: name,
        password,
        attributes: {
          email: null
        }
      })
      const response = await Auth.signIn(name, password)
      userdata = { token: response?.signInUserSession?.idToken?.jwtToken, id: response?.attributes?.sub }
      window.localStorage.setItem('userInfo', JSON.stringify(userdata))
      await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users`, { id: userdata?.id })
        .catch(err => console.log(err))
    }
    dispatch({ type: USER_REGISTER_SUCCESS, payload: userdata })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: userdata })
    await routingCommunityNews(dispatch, false)
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.message
    })
  }
}

export const login = (name, password) => async (dispatch) => {
  let data = {}
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD !== 'cognito') {
      const { data: tokendata } = await postApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
        { name, password }
      )
      data = tokendata
    } else {
      const response = await Auth.signIn(name, password)
      data = {
        token: response?.signInUserSession?.idToken?.jwtToken || '',
        id: response?.attributes?.sub || ''
      }
      window.localStorage.setItem('userInfo', JSON.stringify(data))
      await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users`, { id: data.id }, {
        headers: {
          Authorization: 'Bearer ' + data.token
        }
      })
      await putApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, {
        firstName: response.attributes.given_name,
        lastName: response.attributes.family_name,
        birthday: response.attributes.birthdate,
        phone: response.attributes.phone_number,
        email: response.attributes.email
      }, {
        headers: {
          Authorization: 'Bearer ' + data.token
        }
      })
    }
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    await routingCommunityNews(dispatch, true)
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

function checkErrorReturnMessage (error, dispatch) {
  const message = error.response && error.response.data.error ? error.response.data.error : error.message
  if (message === 'Not authorized, token failed') {
    dispatch(logout())
  }
  return message
}

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/profile/${id}`)
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.results })
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: checkErrorReturnMessage(error, dispatch) })
  }
}

export const checkAndUpdateToken = () => async (dispatch) => {
  dispatch({ type: ACCESS_TOKEN_REQUEST })
  getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/token`).then((data) => {
    if (data) {
      if (data?.response?.status === 201) {
        dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true })
        return true
      }
    } else {
      return tokenFailure(dispatch, 'Unauthorized')
    }
  }).catch((data) => {
    return tokenFailure(dispatch, 'Unauthorized')
    /* const message = data.response && data.response.data.name ? data.response.data.name : data.message
    if (message === 'TokenExpired') {
      if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
        Auth.currentSession().then((res) => {
          const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
          userInfo.token = res?.idToken?.jwtToken || ''
          if (userInfo.token == '') return tokenFailure(dispatch, message)
          else {
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo })
            dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true })
            return true
          }
        }).catch(data => tokenFailure(dispatch, 'Unauthorized'))
      } else {
        const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/token`, { id: userInfo.id }).then((res) => {
          userInfo.token = res?.token || ''
          if (userInfo.token == '') return tokenFailure(dispatch, message)
          else {
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo })
            dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true })
            return true
          }
        }).catch(data => tokenFailure(dispatch, 'Unauthorized'))
      }
    } else {
      return tokenFailure(dispatch, 'Unauthorized')
    } */
  })
}

const tokenFailure = (dispatch, message) => {
  dispatch({ type: USER_DETAILS_FAIL, payload: message })
  window.localStorage.clear()
  dispatch({ type: USER_LOGOUT })
  window.location.href = '/login'
  return false
}

export const getMyDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`)
    const userdata = data
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      const { attributes } = await Auth.currentAuthenticatedUser({ bypassCache: true })
      userdata.phoneVerified = attributes.phone_number_verified
      userdata.emailVerified = attributes.email_verified
    }
    dispatch({ type: USER_DETAILS_SUCCESS, payload: userdata })
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: checkErrorReturnMessage(error, dispatch) })
  }
}

export const updateUser = (user, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST })
    const { userLogin: { userInfo } } = getState()
    const userProfileFormData = new FormData()
    userProfileFormData.append('firstName', user.firstName)
    userProfileFormData.append('lastName', user.lastName)
    userProfileFormData.append('phone', user?.phone)
    if (user.birthday) userProfileFormData.append('birthday', user.birthday)
    userProfileFormData.append('email', user.email)
    userProfileFormData.append('attachments', user.attachments)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    let currentUser
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true
      })
    }
    const { data } = await putApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, userProfileFormData, config)
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      const toBeUpdated = {
        email: user.email,
        given_name: user.firstName,
        family_name: user.lastName,
        phone_number: user.phone ? user.phone : ''
      }
      if (user.birthday) toBeUpdated.birthdate = user.birthday
      await Auth.updateUserAttributes(currentUser, toBeUpdated)
    }
    dispatch({ type: USER_DETAILS_SUCCESS, payload: { user: data } })
    history.goBack()
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: checkErrorReturnMessage(error, dispatch) })
  }
}

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST })
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users`)
    dispatch({ type: USER_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: checkErrorReturnMessage(error, dispatch) })
  }
}

export const searchUsers = (search) => async (dispatch) => {
  try {
    dispatch({ type: USER_SEARCH_REQUEST })
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/search?name=${search}`)
    dispatch({ type: USER_SEARCH_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_SEARCH_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const logout = () => (dispatch) => {
  Auth.signOut().then(() => {
    window.localStorage.clear()
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
  }).catch(err => console.log(err))
}

export const confirmPin = (username, code) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_CODE_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      const { data } = await Auth.confirmSignUp(username, code)
      dispatch({ type: USER_CONFIRM_CODE_SUCCESS, payload: data })
    } else {
      document.location.href = '/'
    }
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_CODE_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const resendCodeAction = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_RESEND_CODE_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      await Auth.resendSignUp(username)
      dispatch({ type: USER_RESEND_CODE_SUCCESS })
    } else {
      document.location.href = '/'
    }
  } catch (error) {
    dispatch({
      type: USER_RESEND_CODE_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const verifyCurrentUserAttribute = (attr) => async (dispatch) => {
  try {
    dispatch({ type: USER_ATTR_RESEND_CODE_REQUEST })
    dispatch({ type: USER_ATTR_CONFIRM_CODE_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      await Auth.verifyCurrentUserAttribute(attr)
      dispatch({ type: USER_ATTR_RESEND_CODE_SUCCESS })
    } else {
      document.location.href = '/'
    }
  } catch (error) {
    dispatch({
      type: USER_ATTR_RESEND_CODE_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const verifyCurrentUserAttributeSubmit = (attr, code) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_ATTR_CONFIRM_CODE_REQUEST })
    dispatch({ type: USER_ATTR_RESEND_CODE_REQUEST })
    const { userDetails: { user } } = getState()
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      await Auth.verifyCurrentUserAttributeSubmit(attr, code)
      const userdata = user
      const { attributes } = await Auth.currentAuthenticatedUser({
        bypassCache: true
      })
      userdata.phoneVerified = attributes.phone_number_verified
      userdata.emailVerified = attributes.email_verified
      dispatch({ type: USER_DETAILS_SUCCESS, payload: userdata })
      dispatch({ type: USER_ATTR_CONFIRM_CODE_SUCCESS })
    } else {
      document.location.href = '/myProfile'
    }
  } catch (error) {
    dispatch({
      type: USER_ATTR_CONFIRM_CODE_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const forgotPassword = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_FORGOT_PWD_RESEND_CODE_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      const data = await Auth.forgotPassword(username)
      dispatch({ type: USER_FORGOT_PWD_CODE_SUCCESS, payload: `Code has been sent to your ${data.CodeDeliveryDetails.AttributeName.split('_').join(' ')}.` })
      return data
    } else {
      document.location.href = '/'
    }
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PWD_CODE_FAIL,
      payload: error.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const forgotPasswordSubmit = (username, code, confirmPassword, history) => async (dispatch) => {
  try {
    dispatch({ type: USER_FORGOT_PWD_CONFIRM_CODE_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
      await Auth.forgotPasswordSubmit(username, code, confirmPassword)
      dispatch({ type: USER_FORGOT_PWD_CODE_SUCCESS, payload: 'Password has been changed successfully.' })
      dispatch({ type: USER_FORGOT_PWD_CODE_RESET })
      history.push('/login')
    } else {
      document.location.href = '/'
    }
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PWD_CODE_FAIL,
      payload: error?.response && error.response.data.error
        ? error.response.data.error
        : error.message
    })
  }
}

export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
  let resdata
  try {
    dispatch({ type: USER_PASSWORD_CHANGE_REQUEST })
    if (process.env.REACT_APP_AUTH_METHOD !== 'cognito') {
      const { data } = await postApi(dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/users/changePassword`,
        { oldPassword, newPassword }
      )
      resdata = data
    } else {
      const user = await Auth.currentAuthenticatedUser()
      resdata = await Auth.changePassword(user, oldPassword, newPassword)
    }
    dispatch({ type: USER_PASSWORD_CHANGE_SUCCESS, payload: resdata })
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_CHANGE_FAIL,
      payload: error.response && error.response.data.message
        ? (error.response.data.__type === 'NotAuthorizedException' ? 'Incorrect old password.' : error.response.data.message)
        : error.message
    })
  }
}

export const routingCommunityNews = async (dispatch, route = false) => {
  const communityData = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/communities/user`)
  window.localStorage.setItem('currentCommunity', JSON.stringify(communityData.data.communities[0]))
  if (route) {
    document.location.href = '/news'
  }
}
