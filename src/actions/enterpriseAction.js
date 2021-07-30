import axios from 'axios'
import { configFunc, getApi, postApi } from '../utils/apiFunc'
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
  ENTERPRISE_UPDATE_FAIL,
  ENTERPRISE_DELETE_REQUEST,
  ENTERPRISE_DELETE_SUCCESS,
  ENTERPRISE_DELETE_FAIL,
  ENTERPRISE_FOLLOW_REQUEST,
  ENTERPRISE_FOLLOW_SUCCESS,
  ENTERPRISE_FOLLOW_FAIL,
  USER_ENTERPRISE_LIST_REQUEST,
  USER_ENTERPRISE_LIST_SUCCESS,
  USER_ENTERPRISE_LIST_FAIL
} from '../constants/enterpriseConstants'

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listEnterprises = ({ pageNumber = '' }) => async (dispatch) => {
  try {
    dispatch({ type: ENTERPRISE_LIST_REQUEST })
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/community/${currentCommunity.id}?pageNumber=${pageNumber}`
    )
    dispatch({ type: ENTERPRISE_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ENTERPRISE_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const searchEnterprises = (search) => async (dispatch) => {
  try {
    dispatch({ type: ENTERPRISE_SEARCH_REQUEST })
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/community/${currentCommunity.id}/search?title=${search}`
    )
    dispatch({ type: ENTERPRISE_SEARCH_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ENTERPRISE_SEARCH_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const createEnterprise = (newEnterprise) => async (dispatch, getState) => {
  const formData = new FormData()
  formData.append('title', newEnterprise.title)
  formData.append('description', newEnterprise.description)
  formData.append('enterprise', newEnterprise.file)
  formData.append('category', newEnterprise.category)
  formData.append('roles', newEnterprise.roles)
  try {
    dispatch({ type: ENTERPRISE_CREATE_REQUEST })
    await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/add/community/${currentCommunity.id}`, formData)
    dispatch({ type: ENTERPRISE_CREATE_SUCCESS, payload: true })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: ENTERPRISE_CREATE_FAIL, payload: message })
  }
}

export const enterpriseUpdate = (newEnterprise) => async (dispatch) => {
  try {
    dispatch({ type: ENTERPRISE_UPDATE_REQUEST })
    const formData = new FormData()
    formData.append('title', newEnterprise.title)
    formData.append('description', newEnterprise.description)
    formData.append('enterprise', newEnterprise.file)
    formData.append('category', newEnterprise.category)
    formData.append('roles', newEnterprise.roles)
    const { id } = newEnterprise
    const config = configFunc()
    const data = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/${id}/community/${currentCommunity.id}`,
      formData, config
    )
    dispatch({ type: ENTERPRISE_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: ENTERPRISE_UPDATE_FAIL, payload: message })
  }
}

export const enterpriseDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: ENTERPRISE_DELETE_REQUEST })
    const config = configFunc()
    const data = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/${id}/community/${currentCommunity.id}`,
      config
    )
    dispatch({ type: ENTERPRISE_DELETE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: ENTERPRISE_DELETE_FAIL, payload: message })
  }
}

export const followEnterprise = (enterpriseId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ENTERPRISE_FOLLOW_REQUEST })
    await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/enterprises-users/follow`, { enterpriseId })
    dispatch({ type: ENTERPRISE_FOLLOW_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({
      type: ENTERPRISE_FOLLOW_FAIL,
      payload: message
    })
  }
}

export const listUserEnterprises = ({ communityId, pageNumber = '' }) => async (dispatch) => {
  try {
    dispatch({ type: USER_ENTERPRISE_LIST_REQUEST })
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/enterprises/community/${communityId}/user?pageNumber=${pageNumber}`
    )
    dispatch({ type: USER_ENTERPRISE_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_ENTERPRISE_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}
