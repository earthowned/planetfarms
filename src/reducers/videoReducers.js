import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_RESET,
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
  VIDEO_UPDATE_FAIL
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
export const updateVideoReducer = (state = {}, action) => {
  switch (action.type) {
    case VIDEO_UPDATE_REQUEST:
      return { loading: true }
    case VIDEO_UPDATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case VIDEO_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
