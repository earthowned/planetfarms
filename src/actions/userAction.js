import axios from 'axios'
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

export const register = (name, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    dispatch({ type: USER_LOGIN_REQUEST })
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users`, { name, password })
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    window.localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.error ? error.response.data.error : error.message
    })
  }
}

export const login = (name, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
      { name, password },
      config
    )
    window.localStorage.setItem('userInfo', JSON.stringify(data))
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
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
    const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile/${id}`, config)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message
    })
  }
}

export const getMyDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })
    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, config)
    console.log(data)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message
    })
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST })
    const {
      userLogin: { userInfo }
    } = getState()

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

    const { data } = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, userProfileFormData, config)

    dispatch({ type: USER_UPDATE_SUCCESS })

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

    dispatch({ type: USER_DETAILS_RESET })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST })
    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users`, config)

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message
    })
  }
}
export const searchUsers = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/search?name=${search}`)
    dispatch({
      type: USER_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const logout = () => (dispatch) => {
  window.localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  document.location.href = '/login'
}

export const confirmPin = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_CODE_REQUEST })
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/resendCode`,
      { username }
    )
    dispatch({
      type: USER_CONFIRM_CODE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_CODE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const changePassword =
  (username, oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_PASSWORD_CHANGE_REQUEST })
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/users/changePassword`,
        { username, oldPassword, newPassword }
      )
      dispatch({
        type: USER_PASSWORD_CHANGE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: USER_PASSWORD_CHANGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
