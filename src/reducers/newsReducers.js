import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_SEARCH_REQUEST,
  NEWS_SEARCH_SUCCESS,
  NEWS_SEARCH_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_CREATE_RESET
} from '../constants/newsConstants'

export const newsListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true, news: [] }
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload.news,
        pages: action.payload.pages,
        page: action.payload.page
      }
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload }
    case NEWS_SEARCH_REQUEST:
      return { loading: true, news: [] }
    case NEWS_SEARCH_SUCCESS:
      return {
        loading: false,
        searchNews: action.payload.news,
        order: action.payload.order
      }
    case NEWS_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const newsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_CREATE_REQUEST:
      return { loading: true }
    case NEWS_CREATE_SUCCESS:
      return { loading: false, success: true, news: action.payload }
    case NEWS_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case NEWS_CREATE_RESET:
      return {}
    default:
      return state
  }
}
