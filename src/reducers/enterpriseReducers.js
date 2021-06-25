import {
  ENTERPRISE_LIST_REQUEST,
  ENTERPRISE_LIST_SUCCESS,
  ENTERPRISE_LIST_FAIL,
  ENTERPRISE_SEARCH_REQUEST,
  ENTERPRISE_SEARCH_SUCCESS,
  ENTERPRISE_SEARCH_FAIL,
  ENTERPRISE_CREATE_REQUEST,
  ENTERPRISE_CREATE_SUCCESS,
  ENTERPRISE_CREATE_FAIL,
  ENTERPRISE_CREATE_RESET,
  ENTERPRISE_UPDATE_REQUEST,
  ENTERPRISE_UPDATE_SUCCESS,
  ENTERPRISE_UPDATE_FAIL,
  ENTERPRISE_DELETE_REQUEST,
  ENTERPRISE_DELETE_SUCCESS,
  ENTERPRISE_DELETE_FAIL,
  ENTERPRISE_FOLLOW_REQUEST,
  ENTERPRISE_FOLLOW_SUCCESS,
  ENTERPRISE_FOLLOW_FAIL

} from '../constants/enterpriseConstants'

export const enterpriseListReducer = (state = { enterprises: [] }, action) => {
  switch (action.type) {
    case ENTERPRISE_LIST_REQUEST:
      return { loading: true, enterprises: [] }
    case ENTERPRISE_LIST_SUCCESS:
      return {
        loading: false,
        enterprises: action.payload.enterprises,
        pages: action.payload.pages,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      }

    case ENTERPRISE_LIST_FAIL:
      return { loading: false, error: action.payload }
    case ENTERPRISE_SEARCH_REQUEST:
      return { loading: true, enterprises: [] }
    case ENTERPRISE_SEARCH_SUCCESS:
      return {
        loading: false,
        enterprises: action.payload,
        order: action.payload.order
      }
    case ENTERPRISE_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const enterpriseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTERPRISE_CREATE_REQUEST:
      return { loading: true }
    case ENTERPRISE_CREATE_SUCCESS:
      return { loading: false, success: action.payload }
    case ENTERPRISE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ENTERPRISE_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const enterpriseUpdateReducer = (state = {success: false}, action) => {
  switch (action.type) {
    case ENTERPRISE_UPDATE_REQUEST:
      return { ...state, loading: true }
    case ENTERPRISE_UPDATE_SUCCESS:
      return { loading: false, success: action.payload }
    case ENTERPRISE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const enterpriseDeleteReducer = (state = {success: false}, action) => {
  switch (action.type) {
    case ENTERPRISE_DELETE_REQUEST:
      return { ...state, loading: true }
    case ENTERPRISE_DELETE_SUCCESS:
      return { loading: false, success: action.payload }
    case ENTERPRISE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const enterpriseFollowReducer = (state = {}, action) => {
  switch (action.type) {
    case ENTERPRISE_FOLLOW_REQUEST:
      return { loading: true }
    case ENTERPRISE_FOLLOW_SUCCESS:
      return { loading: false, success: true}
    case ENTERPRISE_FOLLOW_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}