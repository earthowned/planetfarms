import { ADD_LESSON_PHOTO, GET_LESSON_PHOTO } from '../utils/urlConstants'
import { postApi, putApi, deleteApi, fileHeader } from '../utils/apiFunc'

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
import { getFormData } from '../utils/getFormData'

export const createLessonImg =
  (iData) => async (dispatch) => {
    const lessonImgData = getFormData(iData)
    try {
      dispatch({ type: PHOTO_CREATE_REQUEST })
      const { data } = await postApi(dispatch, ADD_LESSON_PHOTO, lessonImgData, fileHeader)
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
  ({ iData, id, setEditPhotoModel }) =>
    async (dispatch) => {
      const lessonImgData = getFormData(iData)
      try {
        dispatch({ type: PHOTO_UPDATE_REQUEST })
        const { data } = await putApi(dispatch, GET_LESSON_PHOTO + `/${id}`, lessonImgData, fileHeader)
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
    const { data } = await deleteApi(GET_LESSON_PHOTO + `/${id}`)
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
