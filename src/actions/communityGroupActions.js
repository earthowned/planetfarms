import axios from 'axios'
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
  GROUP_LIST_BYID_FAIL
} from '../constants/communityGroupConstants'

export const listGroups = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: GROUP_LIST_REQUEST })
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/groups`
    )
    console.log('groups', data)
    dispatch({
      type: GROUP_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GROUP_LIST_FAIL,
      payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}

export const searchGroups = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: GROUP_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/groups/search?title=${search}`)
    dispatch({
      type: GROUP_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GROUP_SEARCH_FAIL,
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    })
  }
}

export const createGroup = (newGroup) => async (dispatch, getState) => {
  const formData = new FormData()
  formData.append('title', newGroup.title)
  formData.append('description', newGroup.description)
  formData.append('group', newGroup.file)
  formData.append('category', newGroup.category)
  
  try {
    dispatch({
      type: GROUP_CREATE_REQUEST
    })
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/groups/add`, formData)
    dispatch({
      type: GROUP_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    dispatch({
      type: GROUP_CREATE_FAIL,
      payload: message
    })
  }
}

export const listGroupById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_LIST_BYID_REQUEST })

    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}`)
    console.log('groupid', data)
    dispatch({
      type: GROUP_LIST_BYID_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: GROUP_LIST_BYID_FAIL,
      payload: message
    })
  }
}
