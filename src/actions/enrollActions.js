import { ADD_ENROLL } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'
import {
  ENROLL_CREATE_REQUEST,
  ENROLL_CREATE_SUCCESS,
  ENROLL_CREATE_FAIL
} from '../constants/enrollConstants'

export const addEnroll = (courseId, userId, history) => async (dispatch) => {
  let isEnroll
  if (courseId && userId) {
    isEnroll = true
  }
  const enrollData = { courseId, userId, isEnroll }

  try {
    dispatch({ type: ENROLL_CREATE_REQUEST })
    const { data } = await postApi(dispatch, ADD_ENROLL, enrollData)
    dispatch({ type: ENROLL_CREATE_SUCCESS, payload: data })
    if (history) {
      history.push(`/course/${courseId}`)
    }
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
