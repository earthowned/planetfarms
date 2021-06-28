import {
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL,
  COURSE_CREATE_RESET,
} from '../constants/courseConstants'

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { loading: true }
    case COURSE_CREATE_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case COURSE_CREATE_RESET:
      return {}
    default:
      return state
  }
}
