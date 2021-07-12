import axios from "axios"
import { QUESTION_DELETE_FAIL, QUESTION_DELETE_REQUEST, QUESTION_DELETE_SUCCESS, QUESTION_LIST_FAIL, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_UPDATE_FAIL, 
    QUESTION_UPDATE_REQUEST, QUESTION_UPDATE_SUCCESS } from "../constants/questionConstants"

export const listQuestions = (lessonId) => async (
  dispatch
) => {
  try {
    dispatch({ type: QUESTION_LIST_REQUEST })
      const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/questions/lesson/${lessonId}`)
    dispatch({ type: QUESTION_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const deleteQuestion = (deleteId) => async (dispatch, getState) => {
    try {
        dispatch({ type: QUESTION_DELETE_REQUEST })
    
        const data = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/questions/${deleteId}`)
        dispatch({
            type: QUESTION_DELETE_SUCCESS,
            payload: data
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({ type: QUESTION_DELETE_FAIL, payload: message })
    }
}

export const updateQuestion = (newQuestions) => async (dispatch) => {
    try {
        dispatch({ type: QUESTION_UPDATE_REQUEST })
        const {id, question, answer, options, testId} = newQuestions
      const {data} =  await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/questions/${id}`, {
            question,
            answer,
            options,
            testId
        })
        
        dispatch({
            type: QUESTION_UPDATE_SUCCESS,
            payload: (data.message ? true : false)
        })
    } catch (error) {
        const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({
            type: QUESTION_UPDATE_FAIL,
            payload: message
        })
    }
}