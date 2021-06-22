import axios from "axios"
import { MEMBER_LIST_FAIL, MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS, 
  MEMBER_SEARCH_FAIL, MEMBER_SEARCH_REQUEST, MEMBER_SEARCH_SUCCESS } from "../constants/MemberConstants"

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listMembers = () => async (
  dispatch
) => {
  try {
    dispatch({ type: MEMBER_LIST_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}`
    )
    
    dispatch({
      type: MEMBER_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MEMBER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const searchMembers = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: MEMBER_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}/search?name=${search}`)
    
    dispatch({
      type: MEMBER_SEARCH_SUCCESS,
      payload: data.member
    })
  } catch (error) {
    dispatch({
      type: MEMBER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
