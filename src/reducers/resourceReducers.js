import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL
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
    default:
      return state
  }
}
