import {
  PHOTO_CREATE_REQUEST,
  PHOTO_CREATE_SUCCESS,
  PHOTO_CREATE_FAIL,
  PHOTO_CREATE_RESET,
  PHOTO_UPDATE_REQUEST,
  PHOTO_UPDATE_SUCCESS,
  PHOTO_UPDATE_FAIL,
  PHOTO_DELETE_REQUEST,
  PHOTO_DELETE_SUCCESS,
  PHOTO_DELETE_FAIL
} from '../constants/photoConstants'

export const photoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PHOTO_CREATE_REQUEST:
      return { loading: true }
    case PHOTO_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case PHOTO_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PHOTO_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const photoUpdateReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case PHOTO_UPDATE_REQUEST:
      return { loading: true }
    case PHOTO_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case PHOTO_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const photoDeleteReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case PHOTO_DELETE_REQUEST:
      return { loading: true }
    case PHOTO_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PHOTO_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
