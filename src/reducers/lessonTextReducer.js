import {
  LESSSON_TEXT_CREATE_REQUEST,
  LESSSON_TEXT_CREATE_SUCCESS,
  LESSSON_TEXT_CREATE_FAIL,
  LESSSON_TEXT_CREATE_RESET
} from '../constants/lessonTextConstants'

export const lessonTextCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSSON_TEXT_CREATE_REQUEST:
      return { loading: true }
    case LESSSON_TEXT_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case LESSSON_TEXT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case LESSSON_TEXT_CREATE_RESET:
      return {}
    default:
      return state
  }
}
