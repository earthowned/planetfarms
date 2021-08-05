import { ADD_LESSON_PHOTO } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  LESSSON_PHOTO_CREATE_REQUEST,
  LESSSON_PHOTO_CREATE_SUCCESS,
  LESSSON_PHOTO_CREATE_FAIL
} from '../constants/photoConstants'
import axios from 'axios'

export const createLessonImg =
  (lessonImg, photoDescription, isImgDesc, lessonId, newsId) => async (dispatch) => {
    const lessonImgData = new FormData()
    lessonImgData.append('lessonImg', lessonImg)
    lessonImgData.append('photoDescription', photoDescription)
    lessonImgData.append('isImgDesc', isImgDesc)
    newsId ? lessonImgData.append('newsId', newsId) : lessonImgData.append('lessonId', lessonId)

    try {
      dispatch({ type: LESSSON_PHOTO_CREATE_REQUEST })
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const { data } = await postApi(
        dispatch,
        ADD_LESSON_PHOTO,
        lessonImgData,
        config
      )
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
