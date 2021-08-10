import {
  MEMBER_LIST_FAIL, MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS
} from '../constants/memberConstants'

export const memberListReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case MEMBER_LIST_REQUEST:
      return { loading: true, members: [] }
    case MEMBER_LIST_SUCCESS:
      return {
        loading: false,
        members: action.payload.data,
        totalItems: action.payload.totalItems,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
        totalPages: action.payload.totalPages
      }
    case MEMBER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
