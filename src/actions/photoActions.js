import {
  Axios,
  ADD_LESSON_PHOTO,
  GET_LESSON_PHOTO
} from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  LESSSON_PHOTO_CREATE_REQUEST,
  LESSSON_PHOTO_CREATE_SUCCESS,
  LESSSON_PHOTO_CREATE_FAIL,
  LESSSON_PHOTO_UPDATE_REQUEST,
  LESSSON_PHOTO_UPDATE_SUCCESS,
  LESSSON_PHOTO_UPDATE_FAIL,
  LESSSON_PHOTO_DELETE_REQUEST,
  LESSSON_PHOTO_DELETE_SUCCESS,
  LESSSON_PHOTO_DELETE_FAIL
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

export const updatePhoto =
  (id, lessonImg, photoDescription, isImgDesc, setEditPhotoModel, refetch) =>
    async (dispatch) => {
      const lessonImgData = new FormData()
      lessonImgData.append('lessonImg', lessonImg)
      lessonImgData.append('photoDescription', photoDescription)
      lessonImgData.append('isImgDesc', isImgDesc)

      try {
        dispatch({ type: LESSSON_PHOTO_UPDATE_REQUEST })
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
        dispatch({ type: LESSSON_PHOTO_UPDATE_SUCCESS, payload: data })
        refetch()
        setEditPhotoModel(false)
      } catch (error) {
        dispatch({
          type: LESSSON_PHOTO_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const deletePhoto = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: LESSSON_PHOTO_DELETE_REQUEST })
    const { data } = await Axios.delete(GET_LESSON_PHOTO + `/${id}`)
    dispatch({ type: LESSSON_PHOTO_DELETE_SUCCESS, payload: data })
    refetch()
  } catch (error) {
    dispatch({
      type: LESSSON_PHOTO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
