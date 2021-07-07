import { TEST_CREATE_FAIL, TEST_CREATE_REQUEST, TEST_CREATE_SUCCESS, TEST_QUESTION_LIST_FAIL, TEST_QUESTION_LIST_REQUEST, TEST_QUESTION_LIST_SUCCESS } from "../constants/testConstants"
import axios from 'axios';

export const createTest = (lessonId, questions) => async (dispatch, getState) => {
  try {
    dispatch({ type: TEST_CREATE_REQUEST })
    console.log(lessonId, questions);
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/tests/add`, {lessonId, questions})
    dispatch({ type: TEST_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: TEST_CREATE_FAIL, payload: message })
  }
}

export const listTestQuestions = (lessonId ) => async (
  dispatch
) => {
  try {
      const {data: {tests: [test]}} = await axios.get( `${process.env.REACT_APP_API_BASE_URL}/api/tests/lesson/${lessonId}`);
      
    dispatch({ type: TEST_QUESTION_LIST_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/questions/test/${test.id}`
    )
    
    dispatch({
      type: TEST_QUESTION_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TEST_QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
