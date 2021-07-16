import axios from 'axios'

export const configFunc = () => {
  const userdata = window.localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token && `Bearer ${token}`
  return { headers }
}

export const getApi = async (dispatch, url, config = configFunc()) => {
  return await axios.get(url, config)
    .catch(err => {
      const errName = err.response.data.name
      switch (errName) {
        case 'InvalidToken':
          // dispatch(logout())
          return err
        case 'TokenExpired':
          // dispatch(logout())
          return err
        default:
          break
      }
      // return err
    })
}

export const postApi = async (dispatch, url, data, config = configFunc()) => {
  return await axios.post(url, data, config)
    .catch(err => {
      const errName = err.response.data.name
      switch (errName) {
        case 'InvalidToken':
          // dispatch(logout())
          return err
        case 'TokenExpired':
          // dispatch(logout())
          return err
        default:
          return err
      }
    })
}
