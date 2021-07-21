import {
  LESSSON_TEXT_CREATE_REQUEST,
  LESSSON_TEXT_CREATE_SUCCESS,
  LESSSON_TEXT_CREATE_FAIL,
  LESSSON_TEXT_CREATE_RESET,
  LESSSON_TEXT_UPDATE_REQUEST,
  LESSSON_TEXT_UPDATE_SUCCESS,
  LESSSON_TEXT_UPDATE_FAIL,
  LESSSON_TEXT_DELETE_REQUEST,
  LESSSON_TEXT_DELETE_SUCCESS,
  LESSSON_TEXT_DELETE_FAIL
} from '../constants/textConstants'

export const textCreateReducer = (state = {}, action) => {
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

export const textUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSSON_TEXT_UPDATE_REQUEST:
      return { loading: true }
    case LESSSON_TEXT_UPDATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case LESSSON_TEXT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteTextReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSSON_TEXT_DELETE_REQUEST:
      return { loading: true }
    case LESSSON_TEXT_DELETE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case LESSSON_TEXT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
