import axios from 'axios';
import { COMMUNITY_LIST_FAIL, COMMUNITY_LIST_REQUEST, COMMUNITY_LIST_SUCCESS, COMMUNITY_SEARCH_FAIL, COMMUNITY_SEARCH_REQUEST, COMMUNITY_SEARCH_SUCCESS } from "../constants/CommunityConstants"

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