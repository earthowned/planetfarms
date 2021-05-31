import {
  COLLECTION_LIST_REQUEST,
  COLLECTION_LIST_SUCCESS,
  COLLECTION_LIST_FAIL,
  COLLECTION_SEARCH_REQUEST,
  COLLECTION_SEARCH_SUCCESS,
  COLLECTION_SEARCH_FAIL,
  COLLECTION_CREATE_REQUEST,
  COLLECTION_CREATE_SUCCESS,
  COLLECTION_CREATE_FAIL,
  COLLECTION_CREATE_RESET
} from '../constants/collectionConstants'

export const collectionListReducer = (state = { collections: [] }, action) => {
  switch (action.type) {
    case COLLECTION_LIST_REQUEST:
      return { loading: true, collections: [] }
    case COLLECTION_LIST_SUCCESS:
      return {
        loading: false,
        collections: action.payload,
        pages: action.payload.pages,
        page: action.payload.page

      }
    case COLLECTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    case COLLECTION_SEARCH_REQUEST:
      return { loading: true, collections: [] }
    case COLLECTION_SEARCH_SUCCESS:
      return {
        loading: false,
        searchCollections: action.payload.collections,
        order: action.payload.order
      }
    case COLLECTION_SEARCH_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const collectionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COLLECTION_CREATE_REQUEST:
      return { loading: true }
    case COLLECTION_CREATE_SUCCESS:
      return { loading: false, success: true, collection: action.payload }
    case COLLECTION_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case COLLECTION_CREATE_RESET:
      return {}
    default:
      return state
  }
}
