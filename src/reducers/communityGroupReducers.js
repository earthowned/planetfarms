import {
  GROUP_LIST_REQUEST,
  GROUP_LIST_SUCCESS,
  GROUP_LIST_FAIL,
  GROUP_SEARCH_REQUEST,
  GROUP_SEARCH_SUCCESS,
  GROUP_SEARCH_FAIL,
  GROUP_CREATE_REQUEST,
  GROUP_CREATE_SUCCESS,
  GROUP_CREATE_FAIL,
  GROUP_LIST_BYID_REQUEST,
  GROUP_LIST_BYID_SUCCESS,
  GROUP_LIST_BYID_FAIL,
  GROUP_CREATE_RESET

} from '../constants/communityGroupConstants'

export const groupListReducer = (state = { groups: [] }, action) => {
  switch (action.type) {
    case GROUP_LIST_REQUEST:
      return { loading: true, groups: [] }
    case GROUP_LIST_SUCCESS:
      return {
        loading: false,
        groups: action.payload.groups,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case GROUP_LIST_FAIL:
      return { loading: false, error: action.payload }
    case GROUP_SEARCH_REQUEST:
      return { loading: true, groups: [] }
    case GROUP_SEARCH_SUCCESS:
      return {
        loading: false,
        groups: action.payload.groups,
        order: action.payload.order
      }
    case GROUP_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const groupViewReducer = (state = { group: {} }, action) => {
  switch (action.type) {
    case GROUP_LIST_BYID_REQUEST:
      return { ...state, loading: true }
    case GROUP_LIST_BYID_SUCCESS:
      return { loading: false, group: action.payload }
    case GROUP_LIST_BYID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const groupCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case GROUP_CREATE_REQUEST:
      return { loading: true }
    case GROUP_CREATE_SUCCESS:
      return { loading: false, success: true, group: action.payload }
    case GROUP_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case GROUP_CREATE_RESET:
      return {}
    default:
      return state
  }
}
