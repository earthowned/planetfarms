import { MEMBER_LIST_FAIL, MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS, 
  MEMBER_SEARCH_FAIL, 
  MEMBER_SEARCH_REQUEST, MEMBER_SEARCH_SUCCESS } from "../constants/memberConstants"

export const memberListReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case MEMBER_LIST_REQUEST:
      return { loading: true, members: [] }
    case MEMBER_LIST_SUCCESS:
      return {
        loading: false,
        members: action.payload,
        pages: action.payload.pages,
        page: action.payload.page
      }

    case MEMBER_LIST_FAIL:
      return { loading: false, error: action.payload }
    case MEMBER_SEARCH_REQUEST:
      return { loading: true, members: [] }
    case MEMBER_SEARCH_SUCCESS:
      return {
        loading: false,
        members: action.payload,
        order: action.payload.order
      }
    case MEMBER_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
