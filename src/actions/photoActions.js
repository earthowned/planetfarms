import { Axios, ADD_LESSON_PHOTO } from '../utils/urlConstants'

import {
  LESSSON_PHOTO_CREATE_REQUEST,
  LESSSON_PHOTO_CREATE_SUCCESS,
  LESSSON_PHOTO_CREATE_FAIL
} from '../constants/photoConstants'

export const createLessonImg =
  (lessonImg, photoDescription, isImgDesc, lessonId) => async (dispatch) => {
    const lessonImgData = new FormData()
    lessonImgData.append('lessonImg', lessonImg)
    lessonImgData.append('photoDescription', photoDescription)
    lessonImgData.append('isImgDesc', isImgDesc)
    lessonImgData.append('lessonId', lessonId)

    try {
      dispatch({ type: LESSSON_PHOTO_CREATE_REQUEST })
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      }
      const { data } = await Axios.post(ADD_LESSON_PHOTO, lessonImgData, config)
      dispatch({ type: LESSSON_PHOTO_CREATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: LESSSON_PHOTO_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
