import {
  ENROLL_CREATE_REQUEST,
  ENROLL_CREATE_SUCCESS,
  ENROLL_CREATE_FAIL,
  ENROLL_CREATE_RESET
} from '../constants/enrollConstants'

export const addEnrollReducer = (state = {}, action) => {
  switch (action.type) {
    case ENROLL_CREATE_REQUEST:
      return { loading: true }
    case ENROLL_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case ENROLL_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ENROLL_CREATE_RESET:
      return {}
    default:
      return state
  }
}
