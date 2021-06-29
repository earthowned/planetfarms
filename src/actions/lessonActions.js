import { Axios, ADD_LESSONS } from '../utils/urlConstants'

import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL,
} from '../constants/lessonConstants'

export const createLesson =
  ({ courseId, title, coverImg }) =>
  async (dispatch) => {
    const lessonFormData = new FormData()

    lessonFormData.append('courseId', courseId)
    lessonFormData.append('title', title)
    lessonFormData.append('coverImg', coverImg)

    try {
      dispatch({ type: LESSON_CREATE_REQUEST })
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await Axios.post(ADD_LESSONS, lessonFormData, config)
      dispatch({ type: LESSON_CREATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: LESSON_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
