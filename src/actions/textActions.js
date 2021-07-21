import { Axios, GET_LESSON_TEXT, ADD_LESSON_TEXT } from '../utils/urlConstants'

import {
  LESSSON_TEXT_CREATE_REQUEST,
  LESSSON_TEXT_CREATE_SUCCESS,
  LESSSON_TEXT_CREATE_FAIL,
  LESSSON_TEXT_UPDATE_REQUEST,
  LESSSON_TEXT_UPDATE_SUCCESS,
  LESSSON_TEXT_UPDATE_FAIL,
  LESSSON_TEXT_DELETE_REQUEST,
  LESSSON_TEXT_DELETE_SUCCESS,
  LESSSON_TEXT_DELETE_FAIL
} from '../constants/textConstants'

export const createText =
  (textHeading, textDescription, lessonId) => async (dispatch) => {
    const textData = { textHeading, textDescription, lessonId }

    try {
      dispatch({ type: LESSSON_TEXT_CREATE_REQUEST })
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await Axios.post(ADD_LESSON_TEXT, textData, config)
      dispatch({ type: LESSSON_TEXT_CREATE_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: LESSSON_TEXT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const updateText =
  (textId, textHeading, textDescription, setEditTextModel, refetch) =>
    async (dispatch) => {
      const textData = { textHeading, textDescription }

      try {
        dispatch({ type: LESSSON_TEXT_UPDATE_REQUEST })
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
        dispatch({ type: LESSSON_TEXT_UPDATE_SUCCESS, payload: data })
        refetch()
        setEditTextModel(false)
      } catch (error) {
        dispatch({
          type: LESSSON_TEXT_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

// export const deleteText = () => async (dispatch) => {
//   try {
//     dispatch({ type: LESSSON_TEXT_UPDATE_REQUEST })
//     const { data } = await Axios.put(GET_LESSON_TEXT + `/${textId}`)
//     dispatch({ type: LESSSON_TEXT_UPDATE_SUCCESS, payload: data })
//     setEditTextModel(false)
//   } catch (error) {
//     dispatch({
//       type: LESSSON_TEXT_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//     })
//   }
// }
