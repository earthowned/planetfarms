import {
  RESOURCE_USER_LIST_REQUEST,
  RESOURCE_USER_LIST_SUCCESS,
  RESOURCE_USER_LIST_FAIL

} from '../constants/resourceuserConstants'

export const resourceUserListReducer = (state = { resourceUsers: [] }, action) => {
  switch (action.type) {
    case RESOURCE_USER_LIST_REQUEST:
      return { loading: true, resourceUsers: [] }
    case RESOURCE_USER_LIST_SUCCESS:
      return {
        loading: false,
        resourceUsers: action.payload,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case RESOURCE_USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
