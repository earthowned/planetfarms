import axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_CONFIRM_CODE_REQUEST,
  USER_CONFIRM_CODE_SUCCESS,
  USER_CONFIRM_CODE_FAIL,
  USER_PASSWORD_CHANGE_REQUEST,
  USER_PASSWORD_CHANGE_SUCCESS,
  USER_PASSWORD_CHANGE_FAIL
} from '../constants/userConstants'

export const register = (name, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users`,
      { name, password }
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
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
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
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
