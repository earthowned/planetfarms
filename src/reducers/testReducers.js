import { TEST_CREATE_FAIL, TEST_CREATE_REQUEST, TEST_CREATE_RESET, TEST_CREATE_SUCCESS, TEST_QUESTION_LIST_FAIL, TEST_QUESTION_LIST_REQUEST, TEST_QUESTION_LIST_SUCCESS } from '../constants/testConstants'

export const testCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_CREATE_REQUEST:
      return { loading: true }
    case TEST_CREATE_SUCCESS:
      return { loading: false, success: true, test: action.payload }
    case TEST_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case TEST_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const testQuestionListReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case TEST_QUESTION_LIST_REQUEST:
      return { loading: true, resources: [] }
    case TEST_QUESTION_LIST_SUCCESS:

      return {
        loading: false,
        questions: action.payload.questions,
        totalItems: action.payload.totalItems,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
        totalPages: action.payload.totalPages
      }
    case TEST_QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
