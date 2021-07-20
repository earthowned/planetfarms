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
}

export const postApi = async (dispatch, url, data, config = configFunc()) => {
  return await axios.post(url, data, config)
}
