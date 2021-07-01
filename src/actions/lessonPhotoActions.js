import { Axios, ADD_LESSON_PHOTO } from '../utils/urlConstants'

import {
  LESSSON_PHOTO_CREATE_REQUEST,
  LESSSON_PHOTO_CREATE_SUCCESS,
  LESSSON_PHOTO_CREATE_FAIL
} from '../constants/lessonPhotoConstants'

export const createLessonImg =
  (lessonImgDataToPost, lessonId) => async (dispatch) => {
    const lessonImgData = new FormData()
    lessonImgData.append('lessonImg', lessonImgDataToPost.lessonImg)
    lessonImgData.append(
      'photoDescription',
      lessonImgDataToPost.photoDescription
    )
    lessonImgData.append('isImgDesc', lessonImgDataToPost.isImgDesc)
    lessonImgData.append('lessonId', lessonId)

    try {
      dispatch({ type: LESSSON_PHOTO_CREATE_REQUEST })
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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
