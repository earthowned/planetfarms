import axios from 'axios'
import { COMMUNITY_CREATE_FAIL, COMMUNITY_CREATE_REQUEST, COMMUNITY_CREATE_SUCCESS, COMMUNITY_DELETE_FAIL, COMMUNITY_DELETE_REQUEST, COMMUNITY_DELETE_SUCCESS, COMMUNITY_JOIN_FAIL, COMMUNITY_JOIN_REQUEST, COMMUNITY_JOIN_SUCCESS, COMMUNITY_LIST_FAIL, COMMUNITY_LIST_REQUEST, COMMUNITY_LIST_SUCCESS, COMMUNITY_SEARCH_FAIL, COMMUNITY_SEARCH_REQUEST, COMMUNITY_SEARCH_SUCCESS, COMMUNITY_UPDATE_FAIL, COMMUNITY_UPDATE_REQUEST, COMMUNITY_UPDATE_SUCCESS, COMMUNITY_VISIT_FAIL, COMMUNITY_VISIT_REQUEST, COMMUNITY_VISIT_SUCCESS, USER_COMMUNITY_LIST_FAIL, USER_COMMUNITY_LIST_REQUEST, USER_COMMUNITY_LIST_SUCCESS, USER_COMMUNITY_SEARCH_FAIL, USER_COMMUNITY_SEARCH_REQUEST, USER_COMMUNITY_SEARCH_SUCCESS } from '../constants/communityConstants'
import { configFunc, getApi } from '../utils/apiFunc'
import { logout } from '../actions/userAction'

export const listCommunities = ({ pageNumber }) => async (
  dispatch
) => {
  try {
    dispatch({ type: COMMUNITY_LIST_REQUEST })
    const config = await configFunc()
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/communities?pageNumber=${pageNumber}`, config
    )
    dispatch({
      type: COMMUNITY_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: COMMUNITY_LIST_FAIL,
      payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}

export const searchCommunities = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: COMMUNITY_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/search?name=${search}`)
    dispatch({
      type: COMMUNITY_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: COMMUNITY_SEARCH_FAIL,
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    })
  }
}

export const listUserCommunities = ({ userPageNumber = '' }) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_COMMUNITY_LIST_REQUEST })
    const { data } = await getApi(
            `${process.env.REACT_APP_API_BASE_URL}/api/communities/user?pageNumber=${userPageNumber}`
    )
    dispatch({
      type: USER_COMMUNITY_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_COMMUNITY_LIST_FAIL,
      payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
    })
  }
}

export const searchUserCommunities = (userId, search) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_COMMUNITY_SEARCH_REQUEST })
    const config = await configFunc()
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/user/search?name=${search}`, config)
    dispatch({
      type: USER_COMMUNITY_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_COMMUNITY_SEARCH_FAIL,
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    })
  }
}

export const createCommunity = (newCommunity) => async (dispatch, getState) => {
  const formData = new FormData()
  formData.append('name', newCommunity.name)
  formData.append('description', newCommunity.description)
  formData.append('community', newCommunity.file)
  formData.append('category', newCommunity.category)
  formData.append('auto_follow', newCommunity.toggleActive)

  try {
    dispatch({
      type: COMMUNITY_CREATE_REQUEST
    })
    const config = await configFunc()
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/communities/add`, formData, config)
    dispatch({
      type: COMMUNITY_CREATE_SUCCESS
    })
  } catch (error) {
    const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    dispatch({
      type: COMMUNITY_CREATE_FAIL,
      payload: message
    })
  }
}

export const joinCommunity = (communityId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMMUNITY_JOIN_REQUEST
    })
    const config = await configFunc()
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/communities-users/follow`, { communityId }, config)
    dispatch({
      type: COMMUNITY_JOIN_SUCCESS
    })
  } catch (error) {
    const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    dispatch({
      type: COMMUNITY_JOIN_FAIL,
      payload: message
    })
  }
}

export const visitCommunity = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMUNITY_VISIT_REQUEST })

    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/${id}`)

    dispatch({
      type: COMMUNITY_VISIT_SUCCESS,
      payload: data
    })
    localStorage.setItem('currentCommunity', JSON.stringify(data))
    document.location.href = `/community-page-news/${data.slug}`
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: COMMUNITY_VISIT_FAIL,
      payload: message
    })
  }
}

export const communityUpdate = (newCommunity) => async (dispatch) => {
  try {
    dispatch({ type: COMMUNITY_UPDATE_REQUEST })
    const formData = new FormData()
    formData.append('name', newCommunity.name)
    formData.append('description', newCommunity.description)
    formData.append('community', newCommunity.file)
    formData.append('category', newCommunity.category)
    formData.append('auto_follow', newCommunity.toggleActive)

    const { id } = newCommunity
    const config = await configFunc()
    const data = await axios.put(
            `${process.env.REACT_APP_API_BASE_URL}/api/communities/${id}`,
            formData, config
    )
    dispatch({
      type: COMMUNITY_UPDATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: COMMUNITY_UPDATE_FAIL,
      payload: message
    })
  }
}

export const communityDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMMUNITY_DELETE_REQUEST })
    const config = await configFunc()
    const data = await axios.delete(
            `${process.env.REACT_APP_API_BASE_URL}/api/communities/${id}`,
            config
    )

    dispatch({
      type: COMMUNITY_DELETE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: COMMUNITY_DELETE_FAIL,
      payload: message
    })
  }
}
