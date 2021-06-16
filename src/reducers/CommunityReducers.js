import { COMMUNITY_LIST_FAIL, 
    COMMUNITY_LIST_REQUEST, 
    COMMUNITY_LIST_SUCCESS,
    COMMUNITY_SEARCH_REQUEST,
    COMMUNITY_SEARCH_SUCCESS,
    COMMUNITY_SEARCH_FAIL,
    COMMUNITY_CREATE_REQUEST,
    COMMUNITY_CREATE_SUCCESS,
    COMMUNITY_CREATE_FAIL,
    COMMUNITY_CREATE_RESET
} from "../constants/CommunityConstants"

export const communityListReducer = (state = { communities: [] }, action) => {
  switch (action.type) {
    case COMMUNITY_LIST_REQUEST:
      return { loading: true, communities: [] }
    case COMMUNITY_LIST_SUCCESS:
      return {
        loading: false,
        communities: action.payload.communities,
        pages: action.payload.pages,
        page: action.payload.page
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

export const communityCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMUNITY_CREATE_REQUEST:
      return { loading: true }
    case COMMUNITY_CREATE_SUCCESS:
      return { loading: false, success: true}
    case COMMUNITY_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case COMMUNITY_CREATE_RESET:
      return {}
    default:
      return state
  }
}
