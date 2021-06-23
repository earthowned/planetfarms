import { Axios, ADD_LESSONS } from '../utils/urlConstants'

import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL
} from '../constants/lessonConstants'

export const createLesson =
  ({ lessonData }) =>
    async (dispatch) => {
      try {
        dispatch({ type: LESSON_CREATE_REQUEST })
        const config = {
          headers: {
          // Authorization: `Bearer ${userInfo.token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await Axios.post(ADD_LESSONS, lessonData, config)
        dispatch({ type: LESSON_CREATE_SUCCESS, payload: data })
      } catch (error) {
        dispatch({
          type: LESSON_CREATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }
