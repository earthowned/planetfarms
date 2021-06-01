import axios from 'axios'
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
  COLLECTION_UPDATE_REQUEST,
  COLLECTION_UPDATE_SUCCESS,
  COLLECTION_UPDATE_FAIL
} from '../constants/collectionConstants'

export const listCollections = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: COLLECTION_LIST_REQUEST })
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/collection`
    )
    console.log('data', data)
    dispatch({
      type: COLLECTION_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: COLLECTION_LIST_FAIL,
      payload:
                 error.response && error.response.data.message
                   ? error.response.data.message
                   : error.message
    })
  }
}

export const searchCollections = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: COLLECTION_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/collection/search?title=${search}`)
    dispatch({
      type: COLLECTION_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: COLLECTION_SEARCH_FAIL,
      payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}

export const createCollection = (newCollection) => async (dispatch, getState) => {
  const formData = new FormData()
  formData.append('name', newCollection.name)
  formData.append('docType', newCollection.docType)
  formData.append('resourceType', newCollection.resourceType)
  formData.append('linkId', newCollection.linkId)
  try {
    dispatch({ type: COLLECTION_CREATE_REQUEST })
    const { userLogin: { userInfo } } = getState()
    const config = {
      headers: {
        // Authorization : `Bearer ${userInfo.token}`,
        'Content-Type': 'multipart/form-data'
      }
    }
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/collection/add`, formData, config)
    dispatch({ type: COLLECTION_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    dispatch({ type: COLLECTION_CREATE_FAIL, payload: message })
  }
}

export const updateCollection = (updateCollection, id) => async (dispatch) => {
  try {
    dispatch({
      type: COLLECTION_UPDATE_REQUEST
    })

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/collection/${id}`, updateCollection
    )
    dispatch({
      type: COLLECTION_UPDATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: COLLECTION_UPDATE_FAIL,
      payload: message
    })
  }
}
