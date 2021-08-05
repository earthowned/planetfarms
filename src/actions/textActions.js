import { ADD_LESSON_TEXT } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  LESSSON_TEXT_CREATE_REQUEST,
  LESSSON_TEXT_CREATE_SUCCESS,
  LESSSON_TEXT_CREATE_FAIL
} from '../constants/textConstants'

export const createText =
  (textHeading, textDescription, lessonId, newsId) => async (dispatch) => {
    const textData = { textHeading, textDescription, lessonId, newsId }

    try {
      dispatch({ type: LESSSON_TEXT_CREATE_REQUEST })
      const { data } = await postApi(
        dispatch,
        ADD_LESSON_TEXT,
        textData
      )
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
