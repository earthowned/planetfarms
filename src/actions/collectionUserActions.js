import axios from 'axios'
import {
  COLLECTION_USER_LIST_REQUEST,
  COLLECTION_USER_LIST_SUCCESS,
  COLLECTION_USER_LIST_FAIL,
  COLLECTION_USER_CREATE_REQUEST,
  COLLECTION_USER_CREATE_SUCCESS,
  COLLECTION_USER_CREATE_FAIL
} from '../constants/collectionUserConstants'

export const createCollectionUser = (newCollectionUser) => async (dispatch) => {
  try {
    dispatch({
      type: COLLECTION_USER_CREATE_REQUEST
    })

    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/resourceUser/add`, newCollectionUser)
    dispatch({
      type: COLLECTION_USER_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
    dispatch({
      type: COLLECTION_USER_CREATE_FAIL,
      payload: message
    })
  }
}
