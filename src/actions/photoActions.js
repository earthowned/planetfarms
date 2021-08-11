import {
  Axios,
  ADD_LESSON_PHOTO,
  GET_LESSON_PHOTO
} from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  PHOTO_CREATE_REQUEST,
  PHOTO_CREATE_SUCCESS,
  PHOTO_CREATE_FAIL,
  PHOTO_UPDATE_REQUEST,
  PHOTO_UPDATE_SUCCESS,
  PHOTO_UPDATE_FAIL,
  PHOTO_DELETE_REQUEST,
  PHOTO_DELETE_SUCCESS,
  PHOTO_DELETE_FAIL
} from '../constants/photoConstants'

export const createLessonImg =
  (lessonImg, photoDescription, isImgDesc, lessonId, newsId) => async (dispatch) => {
    const lessonImgData = new FormData()
    lessonImgData.append('img', lessonImg)
    lessonImgData.append('photoDescription', photoDescription)
    lessonImgData.append('isImgDesc', isImgDesc)
    newsId ? lessonImgData.append('newsId', newsId) : lessonImgData.append('lessonId', lessonId)

    try {
      dispatch({ type: PHOTO_CREATE_REQUEST })
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
      dispatch({ type: PHOTO_CREATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: PHOTO_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const updatePhoto =
  (id, lessonImg, photoDescription, isImgDesc, setEditPhotoModel) =>
    async (dispatch) => {
      const lessonImgData = new FormData()

        lessonImgData.append('img', lessonImg)
        lessonImgData.append('photoDescription', photoDescription)
        lessonImgData.append('isImgDesc', isImgDesc)

      try {
        dispatch({ type: PHOTO_UPDATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await Axios.put(
          GET_LESSON_PHOTO + `/${id}`,
          lessonImgData,
          config
        )
        dispatch({ type: PHOTO_UPDATE_SUCCESS, payload: data })
        setEditPhotoModel(false)
      } catch (error) {
        dispatch({
          type: PHOTO_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const deletePhoto = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: PHOTO_DELETE_REQUEST })
    const { data } = await Axios.delete(GET_LESSON_PHOTO + `/${id}`)
    dispatch({ type: PHOTO_DELETE_SUCCESS, payload: data })
    refetch()
  } catch (error) {
    dispatch({
      type: PHOTO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
