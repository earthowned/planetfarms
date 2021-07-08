import {
  LESSSON_PHOTO_CREATE_REQUEST,
  LESSSON_PHOTO_CREATE_SUCCESS,
  LESSSON_PHOTO_CREATE_FAIL,
  LESSSON_PHOTO_CREATE_RESET
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
