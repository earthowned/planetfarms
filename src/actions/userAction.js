import axios from 'axios'
import Amplify, { Auth } from 'aws-amplify'
import { configFunc, getApi } from '../utils/apiFunc'

import {
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
  USER_PASSWORD_CHANGE_REQUEST,
  USER_PASSWORD_CHANGE_SUCCESS,
  USER_PASSWORD_CHANGE_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_DETAILS_RESET,
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
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users`, { name, password })
      userdata = data
    } else {
      await Auth.signUp({
        username: name,
        password,
        attributes: {
          email: null
        }
      })
      const response = await Auth.signIn(name, password)
      userdata = { token: response?.signInUserSession?.idToken?.jwtToken, id: response?.attributes?.sub || '' }
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users`, { id: userdata.id }, {
        headers: {
          Authorization: 'Bearer ' + userdata.token
        }
      })
        .catch(err => console.log(err))
    }
    window.localStorage.setItem('userInfo', JSON.stringify(userdata))
    dispatch({ type: USER_REGISTER_SUCCESS, payload: userdata })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: userdata })
    // routingCommunityNews(false)
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
      const config = { headers: { 'Content-Type': 'application/json' } }
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
        { name, password },
        config
      )
      data = response.data
    } else {
      const response = await Auth.signIn(name, password)
      data = {
        token: response?.signInUserSession?.idToken?.jwtToken || '',
        id: response?.attributes?.sub || ''
      }
    }
    window.localStorage.setItem('userInfo', JSON.stringify(data))
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    routingCommunityNews(true)
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
    })
  }
}

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })
    const { data } = await getApi(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile/${id}`, dispatch)
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message
    dispatch({ type: USER_DETAILS_FAIL, payload: message })
  }
}

export const getMyDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })
    const { attributes } = await Auth.currentAuthenticatedUser()
    const { data } = await getApi(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, dispatch)
    const userdata = {
      firstName: attributes.given_name,
      lastName: attributes.family_name,
      phone: attributes.phone_number,
      email: attributes.email,
      dateOfBirth: attributes.birthdate,
      lastLogin: data.lastLogin,
      numberOfVisit: data.numberOfVisit,
      attachments: data.attachments
    }
    dispatch({ type: USER_DETAILS_SUCCESS, payload: userdata })
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message
    dispatch({ type: USER_DETAILS_FAIL, payload: message })
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST })
    const { userLogin: { userInfo } } = getState()
    const userProfileFormData = new FormData()
    userProfileFormData.append('firstName', user.firstName)
    userProfileFormData.append('lastName', user.lastName)
    userProfileFormData.append('phone', user.phone)
    userProfileFormData.append('birthday', user.birthday)
    userProfileFormData.append('email', user.email)
    userProfileFormData.append('attachments', user.attachments)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const currentUser = await Auth.currentAuthenticatedUser()

    await Auth.updateUserAttributes(currentUser, {
      email: user.email,
      given_name: user.firstName,
      family_name: user.lastName,
      birthdate: user.birthday,
      phone_number: user.phone ? user.phone : ''
    })

    const { data } = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, userProfileFormData, config)
    const { attributes } = await Auth.currentAuthenticatedUser()

    const userdata = {
      firstName: attributes.given_name,
      lastName: attributes.family_name,
      phone: attributes.phone_number,
      email: attributes.email,
      dateOfBirth: attributes.birthdate,
      lastLogin: data.lastLogin,
      numberOfVisit: data.numberOfVisit,
      attachments: data.attachments
    }

    dispatch({ type: USER_UPDATE_SUCCESS })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: USER_DETAILS_SUCCESS, payload: userdata })
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: USER_UPDATE_FAIL, payload: message })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST })
    const { userLogin: { userInfo } } = getState()
    const config = configFunc()
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users`, config)
    dispatch({ type: USER_LIST_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.error ? error.response.data.error : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: USER_LIST_FAIL, payload: message })
  }
}

export const searchUsers = (search) => async (dispatch) => {
  try {
    dispatch({ type: USER_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/search?name=${search}`)
    dispatch({ type: USER_SEARCH_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
    })
  }
}

export const logout = () => (dispatch) => {
  Auth.signOut().then(
    () => {
      window.localStorage.clear()
      // window.localStorage.removeItem('userInfo')
      dispatch({ type: USER_LOGOUT })
      document.location.href = '/login'
    }
  ).catch(err => console.log(err))
}

export const confirmPin = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_CODE_REQUEST })
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/resendCode`,
      { username }
    )
    dispatch({ type: USER_CONFIRM_CODE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_CODE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
    })
  }
}

export const resendCodeAction = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_RESEND_CODE_REQUEST })
    const data = await Auth.resendSignUp(username)
    // dispatch({ type: USER_RESEND_CODE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_RESEND_CODE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
    })
  }
}

export const changePassword = (username, oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: USER_PASSWORD_CHANGE_REQUEST })
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/changePassword`,
      { username, oldPassword, newPassword }
    )
    dispatch({ type: USER_PASSWORD_CHANGE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_CHANGE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
    })
  }
}

export const routingCommunityNews = async (route = false) => {
  const userdata = localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  console.log(token)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  const communityData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/user`, config)
  localStorage.setItem('currentCommunity', JSON.stringify(communityData.data.communities[0]))
  if (route) {
    document.location.href = `/community-page-news/${communityData.data.communities[0].slug}`
  }
}
