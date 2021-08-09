import {
  TEXT_CREATE_REQUEST,
  TEXT_CREATE_SUCCESS,
  TEXT_CREATE_FAIL,
  TEXT_CREATE_RESET,
  TEXT_UPDATE_REQUEST,
  TEXT_UPDATE_SUCCESS,
  TEXT_UPDATE_FAIL,
  TEXT_DELETE_REQUEST,
  TEXT_DELETE_SUCCESS,
  TEXT_DELETE_FAIL
} from '../constants/textConstants'

export const textCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TEXT_CREATE_REQUEST:
      return { loading: true }
    case TEXT_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload }
    case TEXT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case TEXT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const textUpdateReducer = (state = {success: false}, action) => {
  switch (action.type) {
    case TEXT_UPDATE_REQUEST:
      return { loading: true }
    case TEXT_UPDATE_SUCCESS:
      return { loading: false, success: true}
    case TEXT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const textDeleteReducer = (state = {success: false}, action) => {
  switch (action.type) {
    case TEXT_DELETE_REQUEST:
      return { loading: true }
    case TEXT_DELETE_SUCCESS:
      return { loading: false, success: true}
    case TEXT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
