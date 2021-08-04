import { getApi, putApi } from '../utils/apiFunc'
import {
  MEMBER_ACCESS_FAIL,
  MEMBER_ACCESS_REQUEST,
  MEMBER_ACCESS_SUCCESS,
  MEMBER_LIST_FAIL, MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS,
  MEMBER_SEARCH_FAIL, MEMBER_SEARCH_REQUEST,
  MEMBER_SEARCH_SUCCESS
} from '../constants/memberConstants'

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listMembers = () => async (
  dispatch
) => {
  try {
    dispatch({ type: MEMBER_LIST_REQUEST })
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}`
    )
    console.log(data);
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
    await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}/search?name=${search}`
    )
    dispatch({
      type: MEMBER_SEARCH_SUCCESS
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

export const allowAccess = (id, role) => async (
  dispatch
) => {
  try {
    dispatch({ type: MEMBER_ACCESS_REQUEST })
   const {data} =  await putApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/${id}/community/${currentCommunity.id}`,
      { role }
    )
    dispatch({
      type: MEMBER_ACCESS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MEMBER_ACCESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
