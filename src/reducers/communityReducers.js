import {
  COMMUNITY_LIST_FAIL,
  COMMUNITY_LIST_REQUEST,
  COMMUNITY_LIST_SUCCESS,
  COMMUNITY_SEARCH_REQUEST,
  COMMUNITY_SEARCH_SUCCESS,
  COMMUNITY_SEARCH_FAIL,
  COMMUNITY_CREATE_REQUEST,
  COMMUNITY_CREATE_SUCCESS,
  COMMUNITY_CREATE_FAIL,
  COMMUNITY_CREATE_RESET,
  COMMUNITY_JOIN_REQUEST,
  COMMUNITY_JOIN_SUCCESS,
  COMMUNITY_JOIN_FAIL,
  USER_COMMUNITY_LIST_REQUEST,
  USER_COMMUNITY_LIST_SUCCESS,
  USER_COMMUNITY_LIST_FAIL,
  USER_COMMUNITY_SEARCH_REQUEST,
  USER_COMMUNITY_SEARCH_SUCCESS,
  USER_COMMUNITY_SEARCH_FAIL,
  COMMUNITY_VISIT_REQUEST,
  COMMUNITY_VISIT_SUCCESS,
  COMMUNITY_VISIT_FAIL,
  COMMUNITY_UPDATE_REQUEST,
  COMMUNITY_UPDATE_SUCCESS,
  COMMUNITY_UPDATE_FAIL,
  COMMUNITY_DELETE_REQUEST,
  COMMUNITY_DELETE_SUCCESS,
  COMMUNITY_DELETE_FAIL
} from '../constants/communityConstants'

export const communityListReducer = (state = { communities: [] }, action) => {
  switch (action.type) {
    case COMMUNITY_LIST_REQUEST:
      return { loading: true, communities: [] }
    case COMMUNITY_LIST_SUCCESS:
      return {
        loading: false,
        communities: action.payload.communities,
        pages: action.payload.pages,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      }
    case COMMUNITY_LIST_FAIL:
      return { loading: false, error: action.payload }
    case COMMUNITY_SEARCH_REQUEST:
      return { loading: true, communities: [] }
    case COMMUNITY_SEARCH_SUCCESS:
      return {
        loading: false,
        communities: action.payload.communities,
        order: action.payload.order
      }
    case COMMUNITY_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userCommunityListReducer = (state = { userCommunities: [] }, action) => {
  switch (action.type) {
    case USER_COMMUNITY_LIST_REQUEST:
      return { loading: true, userCommunities: [] }
    case USER_COMMUNITY_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        userCommunities: action.payload.communities,
        pages: action.payload.pages,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      }
    case USER_COMMUNITY_LIST_FAIL:
      return { loading: false, error: action.payload }
    case USER_COMMUNITY_SEARCH_REQUEST:
      return { loading: true, userCommunities: [] }
    case USER_COMMUNITY_SEARCH_SUCCESS:
      return {
        loading: false,
        userCommunities: action.payload.communities,
        order: action.payload.order
      }
    case USER_COMMUNITY_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const communityCreateReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case COMMUNITY_CREATE_REQUEST:
      return { loading: true }
    case COMMUNITY_CREATE_SUCCESS:
      return { loading: false, success: true }
    case COMMUNITY_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case COMMUNITY_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const communityJoinReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMUNITY_JOIN_REQUEST:
      return { loading: true }
    case COMMUNITY_JOIN_SUCCESS:
      return { loading: false, success: true }
    case COMMUNITY_JOIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const communityVisitReducer = (state = { currentCommunity: {} }, action) => {
  switch (action.type) {
    case COMMUNITY_VISIT_REQUEST:
      return { loading: true }
    case COMMUNITY_VISIT_SUCCESS:
      return { loading: false, currentCommunity: action.payload }
    case COMMUNITY_VISIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const communityUpdateReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case COMMUNITY_UPDATE_REQUEST:
      return { ...state, loading: true }
    case COMMUNITY_UPDATE_SUCCESS:
      return { loading: false, success: action.payload }
    case COMMUNITY_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const communityDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMUNITY_DELETE_REQUEST:
      return { ...state, loading: true }
    case COMMUNITY_DELETE_SUCCESS:
      return { loading: false, success: action.payload }
    case COMMUNITY_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
