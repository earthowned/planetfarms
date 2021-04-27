import axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const register = (name, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    console.log(name, password)
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users`,
      { name, password },
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
