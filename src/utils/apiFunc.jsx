import axios from 'axios'

export const configFunc = (options = { headers: {} }) => {
  const userdata = window.localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token && `Bearer ${token}`
  return { headers: { ...headers, ...options.headers } }
}

export const getApi = async (dispatch, url, config) => {
  return await axios.get(url, configFunc(config))
}

export const postApi = async (dispatch, url, data, config) => {
  return await axios.post(url, data, configFunc(config))
}

export const putApi = async (dispatch, url, data, config = configFunc()) => {
  return await axios.put(url, data, config)
}

export const deleteApi = async (url) => {
  return await axios.delete(url)
}
