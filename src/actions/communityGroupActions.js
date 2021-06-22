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
  GROUP_LIST_BYID_FAIL,
  GROUP_UPDATE_REQUEST,
  GROUP_UPDATE_SUCCESS,
  GROUP_UPDATE_FAIL,
  GROUP_DELETE_REQUEST,
  GROUP_DELETE_SUCCESS,
  GROUP_DELETE_FAIL
} from '../constants/CommunityGroupConstants'

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listGroups = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: GROUP_LIST_REQUEST })
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/groups/community/${currentCommunity.id}`
    )
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
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/groups/community/${currentCommunity.id}/search?title=${search}`)
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
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/groups/add/community/${currentCommunity.id}`, formData)
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

    await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`)
    
    dispatch({
      type: GROUP_LIST_BYID_SUCCESS,
      payload: true
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

export const groupUpdate = (newGroup) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_UPDATE_REQUEST })
    const {id, title, category, description, file} = newGroup;
    await axios.put(
            `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`,
            {title, category, description, file}
    );
    
    dispatch({
      type: GROUP_UPDATE_SUCCESS,
      payload: true
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: GROUP_UPDATE_FAIL,
      payload: message
    })
  }
}

export const groupDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_DELETE_REQUEST })
    
    await axios.delete(
            `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`
    );
    
    dispatch({
      type: GROUP_DELETE_SUCCESS,
      payload: true
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: GROUP_DELETE_FAIL,
      payload: message
    })
  }
}
