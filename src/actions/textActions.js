import { Axios, GET_LESSON_TEXT, ADD_LESSON_TEXT } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  TEXT_CREATE_REQUEST,
  TEXT_CREATE_SUCCESS,
  TEXT_CREATE_FAIL,
  TEXT_UPDATE_REQUEST,
  TEXT_UPDATE_SUCCESS,
  TEXT_UPDATE_FAIL,
  TEXT_DELETE_REQUEST,
  TEXT_DELETE_SUCCESS,
  TEXT_DELETE_FAIL
} from '../constants/textConstants'

export const createText =
  (textHeading, textDescription, richtextId, order) => async (dispatch) => {
    const textData = { textHeading, textDescription, richtextId, order }

    try {
      dispatch({ type: TEXT_CREATE_REQUEST })
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await Axios.post(ADD_LESSON_TEXT, textData, config)
      dispatch({ type: TEXT_CREATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: TEXT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const updateText =
  (textId, textHeading, textDescription, order, setEditTextModel) =>
    async (dispatch) => {
      const textData = { textHeading, textDescription, order }

      try {
        dispatch({ type: TEXT_UPDATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const { data } = await Axios.put(
          GET_LESSON_TEXT + `/${textId}`,
          textData,
          config
        )
        dispatch({ type: TEXT_UPDATE_SUCCESS, payload: data })
        // refetch()
        setEditTextModel(false)
      } catch (error) {
        dispatch({
          type: TEXT_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const deleteText = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: TEXT_DELETE_REQUEST })
    const { data } = await Axios.delete(GET_LESSON_TEXT + `/${id}`)
    dispatch({ type: TEXT_DELETE_SUCCESS, payload: data })
    refetch()
  } catch (error) {
    dispatch({
      type: TEXT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
