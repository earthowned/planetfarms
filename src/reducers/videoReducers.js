import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_RESET
} from '../constants/videoConstants'

export const videoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VIDEO_CREATE_REQUEST:
      return { loading: true }
    case VIDEO_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case VIDEO_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case VIDEO_CREATE_RESET:
      return {}
    default:
      return state
  }
}
