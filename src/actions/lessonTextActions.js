import { Axios, ADD_LESSON_TEXT } from '../utils/urlConstants'

import {
  LESSSON_TEXT_CREATE_REQUEST,
  LESSSON_TEXT_CREATE_SUCCESS,
  LESSSON_TEXT_CREATE_FAIL
} from '../constants/lessonTextConstants'

export const createLessonText = (lessonText, lessonId) => async (dispatch) => {
  const textHeading = lessonText.textHeading
  const textDescription = lessonText.textDescription
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
