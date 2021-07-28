import axios from 'axios'
import { Axios } from './urlConstants'

export const configFunc = (header) => {
  const userdata = window.localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  const headers = { 'Content-Type': header || 'application/json' }
  headers.Authorization = token && `Bearer ${token}`
  return { headers }
}

export const getApi = async (dispatch, url, config = configFunc()) => {
  return await axios.get(url, config)
}

export const postApi = async (dispatch, url, data, config = configFunc()) => {
  return await axios.post(url, data, config)
}

export const postCourseAPI = async (url, data, header) => {
  const config = configFunc(header)
  return await Axios.post(url, data, config)
}
