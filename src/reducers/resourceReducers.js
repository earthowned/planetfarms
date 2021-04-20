import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_SEARCH_REQUEST,
  RESOURCE_SEARCH_SUCCESS,
  RESOURCE_SEARCH_FAIL,
  RESOURCE_CREATE_REQUEST,
  RESOURCE_CREATE_SUCCESS,
  RESOURCE_CREATE_FAIL,
  RESOURCE_CREATE_RESET
} from '../constants/resourceConstants'

export const resourceListReducer = (state = { resources: [] }, action) => {
  switch (action.type) {
    case RESOURCE_LIST_REQUEST:
      return { loading: true, resources: [] }
    case RESOURCE_LIST_SUCCESS:
      return {
        loading: false,
        resources: action.payload.resources,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case RESOURCE_LIST_FAIL:
      return { loading: false, error: action.payload }
    case RESOURCE_SEARCH_REQUEST:
      return { loading: true, resources: [] }
    case RESOURCE_SEARCH_SUCCESS:
      return {
        loading: false,
        resources: action.payload.resources,
        order: action.payload.order
      }
    case RESOURCE_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const resourceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RESOURCE_CREATE_REQUEST:
      return { loading: true }
    case RESOURCE_CREATE_SUCCESS:
      return { loading: false, success: true, resource: action.payload }
    case RESOURCE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case RESOURCE_CREATE_RESET:
      return {}
    default:
      return state
  }
}
