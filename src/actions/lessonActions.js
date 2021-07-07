import { Axios, ADD_LESSONS, GET_LESSONS } from '../utils/urlConstants'

import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL,
  LESSON_UPDATE_REQUEST,
  LESSON_UPDATE_SUCCESS,
  LESSON_UPDATE_FAIL
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
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await Axios.post(ADD_LESSONS, lessonFormData, config)
        dispatch({ type: LESSON_CREATE_SUCCESS, payload: data })
        return data
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

export const updateLesson = (title, coverImg, lessonId) => async (dispatch) => {
  const updateLessonFormData = new FormData()
  updateLessonFormData.append('title', title)
  updateLessonFormData.append('coverImg', coverImg)

  try {
    dispatch({ type: LESSON_UPDATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await Axios.put(
      GET_LESSONS + '/' + lessonId,
      updateLessonFormData,
      config
    )
    dispatch({ type: LESSON_UPDATE_SUCCESS, payload: data })
    return data
  } catch (error) {
    dispatch({
      type: LESSON_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
