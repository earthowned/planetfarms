import axios from 'axios';
import { COMMUNITY_CREATE_FAIL, COMMUNITY_CREATE_REQUEST, COMMUNITY_CREATE_SUCCESS, COMMUNITY_JOIN_FAIL, COMMUNITY_JOIN_REQUEST, COMMUNITY_JOIN_SUCCESS, COMMUNITY_LIST_FAIL, COMMUNITY_LIST_REQUEST, COMMUNITY_LIST_SUCCESS, COMMUNITY_SEARCH_FAIL, COMMUNITY_SEARCH_REQUEST, COMMUNITY_SEARCH_SUCCESS, USER_COMMUNITY_LIST_FAIL, USER_COMMUNITY_LIST_REQUEST, USER_COMMUNITY_LIST_SUCCESS, USER_COMMUNITY_SEARCH_FAIL, USER_COMMUNITY_SEARCH_REQUEST, USER_COMMUNITY_SEARCH_SUCCESS } from "../constants/CommunityConstants"

export const listCommunities = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: COMMUNITY_LIST_REQUEST })
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/communities`
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

export const listUserCommunities = (userId, sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_COMMUNITY_LIST_REQUEST })
    const { data } = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/communities/user/${userId}`
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

export const searchUserCommunities = (userId,search) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_COMMUNITY_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/user/${userId}/search?name=${search}`)
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
  console.log(newCommunity);
  const formData = new FormData()
  formData.append('name', newCommunity.name)
  formData.append('description', newCommunity.desc)
  formData.append('community', newCommunity.files)
  formData.append('creatorId', newCommunity.userId)
  
  try {
    dispatch({
      type: COMMUNITY_CREATE_REQUEST
    })
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/communities/add`, formData)
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

export const joinCommunity = (userId, communityId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMMUNITY_JOIN_REQUEST
    })
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/communities-users/follow`, {userId, communityId})
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