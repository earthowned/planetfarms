import axios from 'axios'
import {
  RESOURCE_USER_CREATE_REQUEST,
  RESOURCE_USER_CREATE_SUCCESS,
  RESOURCE_USER_CREATE_FAIL
} from '../constants/resourceuserConstants'

export const createResourceUser = (newResourceUser) => async (dispatch) => {
  try {
    dispatch({
      type: RESOURCE_USER_CREATE_REQUEST
    })

    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/resourceUser/add`, newResourceUser)
    dispatch({
      type: RESOURCE_USER_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: RESOURCE_USER_CREATE_FAIL,
      payload: message
    })
  }
}
