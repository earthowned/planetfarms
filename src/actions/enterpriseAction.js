import axios from 'axios'
import {
  ENTERPRISE_LIST_REQUEST,
  ENTERPRISE_LIST_SUCCESS,
  ENTERPRISE_LIST_FAIL,
  ENTERPRISE_CREATE_REQUEST,
  ENTERPRISE_CREATE_SUCCESS,
  ENTERPRISE_CREATE_FAIL,
  ENTERPRISE_SEARCH_REQUEST,
  ENTERPRISE_SEARCH_SUCCESS,
  ENTERPRISE_SEARCH_FAIL,
  ENTERPRISE_UPDATE_REQUEST,
  ENTERPRISE_UPDATE_SUCCESS,
  ENTERPRISE_UPDATE_FAIL
} from '../constants/EnterpriseConstants'

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listEnterprises = (sort = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: ENTERPRISE_LIST_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/community/${currentCommunity.id}`
    )
    console.log('enterprisedsgfgfhnbvxdfgh', data)
    dispatch({
      type: ENTERPRISE_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ENTERPRISE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const searchEnterprises = (search) => async (
  dispatch
) => {
  try {
    dispatch({ type: ENTERPRISE_SEARCH_REQUEST })
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/enterprises/community/${currentCommunity.id}/search?title=${search}`)
    dispatch({
      type: ENTERPRISE_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ENTERPRISE_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const createEnterprise = (newEnterprise) => async (
  dispatch,
  getState
) => {
  const formData = new FormData()
  formData.append('title', newEnterprise.title)
  formData.append('description', newEnterprise.description)
  formData.append('enterprise', newEnterprise.file)
  formData.append('category', newEnterprise.category)
  formData.append('roles', newEnterprise.roles)
  try {
    dispatch({
      type: ENTERPRISE_CREATE_REQUEST
    })
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/enterprises/add/community/${currentCommunity.id}`, formData)
    dispatch({
      type: ENTERPRISE_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: ENTERPRISE_CREATE_FAIL,
      payload: message
    })
  }
}

export const enterpriseUpdate = (newEnterprise) => async (dispatch) => {
  try {
    dispatch({ type: ENTERPRISE_UPDATE_REQUEST })
    const {id, title, description, file} = newEnterprise;
    await axios.put(
            `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/${id}/community/${currentCommunity.id}`,
            {title, description, file}
    );
    
    dispatch({
      type: ENTERPRISE_UPDATE_SUCCESS,
      payload: true
    })
  } catch (error) {
    const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    dispatch({
      type: ENTERPRISE_UPDATE_FAIL,
      payload: message
    })
  }
}
