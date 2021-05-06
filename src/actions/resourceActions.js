import axios from 'axios'
import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_SEARCH_REQUEST,
  RESOURCE_SEARCH_SUCCESS,
  RESOURCE_SEARCH_FAIL,
  RESOURCE_CREATE_REQUEST,
  RESOURCE_CREATE_SUCCESS,
  RESOURCE_CREATE_FAIL
} from '../constants/resourceConstants'

export const listResources = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: RESOURCE_LIST_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/resources`
    )
    console.log("data",data)
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

export const searchResources = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: RESOURCE_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/resources/search?title=${search}`)
    dispatch({
      type: RESOURCE_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RESOURCE_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const createResource = (newResource) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESOURCE_CREATE_REQUEST
    })
    const { userLogin: { userInfo } } = getState()
    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/resources/add`, newResource, config)
    dispatch({
      type: RESOURCE_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: RESOURCE_CREATE_FAIL,
      payload: message
    })
  }
}
