import axios from 'axios'
import { logout } from '../actions/userAction'

export const configFunc = () => {
  const userdata = localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token && `Bearer ${token}`
  return { headers }
}

export const getApi = (dispatch, url, config = configFunc()) => {
  return axios.get(url, config)
    .catch(err => {
      const errName = err.response.data.name
      switch (errName) {
        case 'InvalidToken':
          dispatch(logout())
          break
        case 'TokenExpired':
          dispatch(logout())
          break
        default:
          break
      }
      return err
    })
}
