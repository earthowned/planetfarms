import * as lessonProgress from '../constants/lessonProgressConstants'

export const lessonProgressCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case lessonProgress.LESSON_PROGRESS_CREATE_REQUEST:
      return { loading: true }
    case lessonProgress.LESSON_PROGRESS_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case lessonProgress.LESSON_PROGRESS_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case lessonProgress.LESSON_PROGRESS_CREATE_RESET:
      return {}
    default:
      return state
  }
}
