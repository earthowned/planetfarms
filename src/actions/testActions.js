import { TEST_CREATE_FAIL, TEST_CREATE_REQUEST, TEST_CREATE_SUCCESS, TEST_QUESTION_EDIT_FAIL, TEST_QUESTION_EDIT_REQUEST, TEST_QUESTION_EDIT_SUCCESS, TEST_QUESTION_LIST_FAIL, TEST_QUESTION_LIST_REQUEST, TEST_QUESTION_LIST_SUCCESS } from '../constants/testConstants'
import axios from 'axios'
import { configFunc } from '../utils/apiFunc'

export const createTest = (lessonId, questions) => async (dispatch, getState) => {
  try {
    dispatch({ type: TEST_CREATE_REQUEST })

    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/tests/add`, { lessonId, questions })
    dispatch({ type: TEST_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: TEST_CREATE_FAIL, payload: message })
  }
}

export const listTestQuestions = (testId) => async (
  dispatch
) => {
  try {
    // const {data: {tests: [test]}} = await axios.get( `${process.env.REACT_APP_API_BASE_URL}/api/tests/lesson/${lessonId}`);
    const config = configFunc()
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user_tests/${testId}`, config)

    dispatch({ type: TEST_QUESTION_LIST_REQUEST })
    const questions = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/questions/test/${data.testId}`
    )

    dispatch({
      type: TEST_QUESTION_LIST_SUCCESS,
      payload: questions.data
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

export const updateTestQuestion = ({ newQuestions, lessonId }) => async (dispatch) => {
  try {
    console.log(newQuestions[0].testId)
    dispatch({ type: TEST_QUESTION_EDIT_REQUEST })
    const { data } = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/tests/${newQuestions[0].testId}`, { questions: newQuestions })
    console.log(data)
    dispatch({
      type: TEST_QUESTION_EDIT_SUCCESS,
      payload: data
    })

    document.location.href = `/admin/edit-test/${lessonId}`
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({
      type: TEST_QUESTION_EDIT_FAIL,
      payload: message
    })
  }
}
