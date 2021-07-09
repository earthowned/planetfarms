import axios from 'axios'
import { logout } from '../actions/userAction'

export const configFunc = () => {
  const userdata = localStorage.getItem('userInfo')
  const token = JSON.parse(userdata).token
  let headers = {'Content-Type': 'application/json'}
  headers['Authorization'] = token && `Bearer ${token}`
  return {
    headers
  }
}

export const getApi = (url, dispatch) => {
  return axios.get(url, configFunc()).catch(err => {
    console.log('error found')
    console.log('error: ', err.response.data.name)
    let errName = err.response.data.name
    switch (errName){
      case 'InvalidToken':
        dispatch(logout())
        break;
      case 'TokenExpired':
        dispatch(logout())
        break;
      default:
        break;
    }
    
    return err
  });
}
