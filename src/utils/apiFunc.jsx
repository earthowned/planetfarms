import axios from 'axios'

export const configFunc = () => {
  const userdata = localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  let headers = {'Content-Type': 'application/json'}
  headers['Authorization'] = token && `Bearer ${token}`
  return {
    headers
  }
}

export const getApi = (url, config=configFunc()) => {
  return axios.get(url, config).catch(err => {
    console.log('error found')
    return err
  });
}
