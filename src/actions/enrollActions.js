import { Axios, ADD_ENROLL } from '../utils/urlConstants'

import {
  ENROLL_CREATE_REQUEST,
  ENROLL_CREATE_SUCCESS,
  ENROLL_CREATE_FAIL
} from '../constants/enrollConstants'

export const addEnroll = (courseId, userId, isEnroll) => async (dispatch) => {
  const enrollData = { courseId, userId, isEnroll }
  try {
    dispatch({ type: ENROLL_CREATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await Axios.post(ADD_ENROLL, enrollData, config)
    dispatch({ type: ENROLL_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ENROLL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
