import {
  LESSSON_PHOTO_CREATE_REQUEST,
  LESSSON_PHOTO_CREATE_SUCCESS,
  LESSSON_PHOTO_CREATE_FAIL,
  LESSSON_PHOTO_CREATE_RESET,
  LESSSON_PHOTO_UPDATE_REQUEST,
  LESSSON_PHOTO_UPDATE_SUCCESS,
  LESSSON_PHOTO_UPDATE_FAIL,
  LESSSON_PHOTO_DELETE_REQUEST,
  LESSSON_PHOTO_DELETE_SUCCESS,
  LESSSON_PHOTO_DELETE_FAIL
} from '../constants/photoConstants'

export const photoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSSON_PHOTO_CREATE_REQUEST:
      return { loading: true }
    case LESSSON_PHOTO_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case LESSSON_PHOTO_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case LESSSON_PHOTO_CREATE_RESET:
      return {}
    default:
      return state
  }
}
export const photoUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSSON_PHOTO_UPDATE_REQUEST:
      return { loading: true }
    case LESSSON_PHOTO_UPDATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case LESSSON_PHOTO_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const photoDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSSON_PHOTO_DELETE_REQUEST:
      return { loading: true }
    case LESSSON_PHOTO_DELETE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case LESSSON_PHOTO_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
