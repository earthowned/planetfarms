import axios from 'axios'
import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL
} from '../constants/resourceConstants'

export const listResources = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: RESOURCE_LIST_REQUEST })

    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/resources`
    )
    dispatch({
      type: RESOURCE_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RESOURCE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
