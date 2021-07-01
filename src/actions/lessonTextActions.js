import { Axios, ADD_LESSON_TEXT } from '../utils/urlConstants'

import {
  LESSSON_TEXT_CREATE_REQUEST,
  LESSSON_TEXT_CREATE_SUCCESS,
  LESSSON_TEXT_CREATE_FAIL
} from '../constants/lessonTextConstants'

export const createLessonText = (lessonTextDataToPost) => async (dispatch) => {
  try {
    dispatch({ type: LESSSON_TEXT_CREATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await Axios.post(
      ADD_LESSON_TEXT,
      lessonTextDataToPost,
      config
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
