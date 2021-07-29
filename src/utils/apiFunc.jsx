import axios from 'axios'

export const configFunc = () => {
  const userdata = window.localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  const headers = { 'Content-Type': 'application/json' }
  headers.Authorization = token && `Bearer ${token}`
  return { headers }
}

export const getCommunity = () => {
  // fetching current community
    const currentCommunity = localStorage.getItem('currentCommunity')
    ? JSON.parse(localStorage.getItem('currentCommunity'))
    : null

    return currentCommunity;
}

export const getApi = async (dispatch, url, config = configFunc()) => {
  return await axios.get(url, config)
}

export const postApi = async (dispatch, url, data, config = configFunc()) => {
  return await axios.post(url, data, config)
}

export const putApi = async (dispatch, url, data, config = configFunc()) => {
  return await axios.put(url, data, config)
}
