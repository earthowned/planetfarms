import axios from 'axios'
import { configFunc, getApi } from '../utils/apiFunc'
import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_LIST_BYID_REQUEST,
  CATEGORY_LIST_BYID_SUCCESS,
  CATEGORY_LIST_BYID_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL
} from '../constants/categoryConstants'

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST })   
    const {data} = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/categories`)
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}

export const createCategory = (newCategory) => async (dispatch, getState) => {
 
  try {
    dispatch({ type: CATEGORY_CREATE_REQUEST })
    const config = configFunc()
    const {name} = newCategory;
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/categories`,{name},
      config
    )
    if(data?.error) {
        return dispatch({ type: CATEGORY_CREATE_FAIL, payload: data.error })
    }

    dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: CATEGORY_CREATE_FAIL, payload: message })
  }
}

export const listCategoryById = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_BYID_REQUEST })
    const {data} = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`)
    dispatch({ type: CATEGORY_LIST_BYID_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: CATEGORY_LIST_BYID_FAIL, payload: message })
  }
}

export const categoryUpdate = (newCategory) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_UPDATE_REQUEST })
   
    const config = configFunc()
    const {id, name} = newCategory
    
    const {data} = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`,
      {name},
      config
    )

     if(data?.error) {
        return dispatch({ type: CATEGORY_UPDATE_FAIL, payload: data.error })
    }


    dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: true })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: CATEGORY_UPDATE_FAIL, payload: message })
  }
}

export const categoryDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_DELETE_REQUEST })
    const config = configFunc()
    const data = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`,
      config
    )
    dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: true })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: CATEGORY_DELETE_FAIL, payload: message })
  }
}
