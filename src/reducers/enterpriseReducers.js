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
  ENTERPRISE_CREATE_RESET

} from '../constants/enterpriseConstants'

export const enterpriseListReducer = (state = { enterprises: [] }, action) => {
  switch (action.type) {
    case ENTERPRISE_LIST_REQUEST:
      return { loading: true, enterprises: [] }
    case ENTERPRISE_LIST_SUCCESS:
      return {
        loading: false,
        enterprises: action.payload,
        pages: action.payload.pages,
        page: action.payload.page
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
      return { loading: false, sucess: true, resource: action.payload }
    case ENTERPRISE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ENTERPRISE_CREATE_RESET:
      return {}
    default:
      return state
  }
}
