import { Axios, ADD_LESSONS } from '../utils/urlConstants'

import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL
} from '../constants/lessonConstants'

export const createLesson =
  ({ courseId, lessonId, steps, title, coverImg }) =>
    async (dispatch) => {
      const lessonFormData = { courseId, lessonId, steps, title, coverImg }
      try {
        dispatch({ type: LESSON_CREATE_REQUEST })
        const { data } = await Axios.post(ADD_LESSONS, lessonFormData)
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
