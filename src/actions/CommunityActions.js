import axios from 'axios';
import { COMMUNITY_CREATE_FAIL, COMMUNITY_CREATE_REQUEST, COMMUNITY_CREATE_SUCCESS, COMMUNITY_LIST_FAIL, COMMUNITY_LIST_REQUEST, COMMUNITY_LIST_SUCCESS, COMMUNITY_SEARCH_FAIL, COMMUNITY_SEARCH_REQUEST, COMMUNITY_SEARCH_SUCCESS } from "../constants/CommunityConstants"

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
