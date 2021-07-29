import * as course from '../constants/courseConstants'

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case course.COURSE_CREATE_REQUEST:
      return { loading: true }
    case course.COURSE_CREATE_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case course.COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case course.COURSE_CREATE_RESET:
      return {}
    default:
      return state
  }
}
export const updateCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case course.COURSE_UPDATE_REQUEST:
      return { loading: true }
    case course.COURSE_UPDATE_SUCCESS:
      return { loading: false, success: true, data: action.payload }
    case course.COURSE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
