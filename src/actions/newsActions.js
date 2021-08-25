import { getApi, putApi, postApi, deleteApi, fileHeader } from '../utils/apiFunc'
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_SEARCH_REQUEST,
  NEWS_SEARCH_SUCCESS,
  NEWS_SEARCH_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAIL,
  NESW_SAVE_TEXT_DETAIL,
  NESW_SAVE_IMAGE_DETAIL,
  NESW_SAVE_VIDEO_DETAIL,
  NEWS_CLEAR,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL
} from '../constants/newsConstants'

import { logout } from './userAction'
import { addVideo } from '../screens/courseManager/addLesson/addVideo'
import { addImage } from '../screens/courseManager/addLesson/addImage'
import { addText } from '../screens/courseManager/addLesson/addText'

// fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

export const listNews = ({ sort = '', pageNumber = '' }) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST })
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/news/community/${currentCommunity.id}?pageNumber=${pageNumber}`
    )
    dispatch({ type: NEWS_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const searchNews = (search) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SEARCH_REQUEST })
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/news/community/${currentCommunity.id}/search?title=${search}`
    )
    dispatch({ type: NEWS_SEARCH_SUCCESS, payload: data.title })
  } catch (error) {
    dispatch({
      type: NEWS_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const createNews = (newNews, newsCover) => async (dispatch, getState) => {
  const formData = new FormData()
  formData.append('title', newNews[0].title)
  formData.append('category', newNews[0].category)
  formData.append('news', newsCover)
  try {
    dispatch({ type: NEWS_CREATE_REQUEST })
    const richText = await postApi(`${process.env.REACT_APP_API_BASE_URL}/api/richtexts`)
    const richtextId = richText?.data?.richtext?.id
    if (richtextId) {
      formData.append('richtextId', richtextId)
      const { data } = await postApi(`${process.env.REACT_APP_API_BASE_URL}/api/news/add/community/${currentCommunity.id}`, formData, fileHeader)
      dispatch({ type: NEWS_CREATE_SUCCESS, payload: data })
      for (let i = 0; i < newNews.length; i++) {
        if (newNews[i]?.videoLink || newNews[i]?.videoResource) {
          await addVideo({ data: newNews[i], richtextId, dispatch })
        }
        if (newNews[i]?.lessonImg) {
          await addImage({ data: newNews[i], richtextId, dispatch })
        }
        if (newNews[i]?.textHeading || newNews[i]?.textDescription) {
          await addText({ data: newNews[i], richtextId, dispatch })
        }
      }
      dispatch({ type: NEWS_CLEAR, payload: data })
      document.location.href = '/news'
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: NEWS_CREATE_FAIL, payload: message })
  }
}

export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_DELETE_REQUEST })
    // eslint-disable-next-line no-undef
    const data = await deleteApi(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`)
    dispatch({ type: NEWS_DELETE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: NEWS_DELETE_FAIL, payload: message })
  }
}

export const savetextDetail = (data) => (dispatch) => {
  dispatch({
    type: NESW_SAVE_TEXT_DETAIL,
    payload: data
  })
}

export const saveimageDetail = (data) => (dispatch) => {
  dispatch({
    type: NESW_SAVE_IMAGE_DETAIL,
    payload: data
  })
}

export const savevideoDetail = (data) => (dispatch) => {
  dispatch({
    type: NESW_SAVE_VIDEO_DETAIL,
    payload: data
  })
}

export const newsUpdate = (news, newNews, richtextId) => async (dispatch) => {
  const formData = new FormData()
  formData.append('title', news.title)
  formData.append('category', news.category)
  formData.append('news', news.newsCover)
  try {
    dispatch({ type: NEWS_UPDATE_REQUEST })
    const data = await putApi(`${process.env.REACT_APP_API_BASE_URL}/api/news/${news.id}/community/${currentCommunity.id}`, formData)
    dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data })
    // adding new content
    for (let i = 0; i < newNews.length; i++) {
      if (newNews[i]?.videoLink || newNews[i]?.videoResource) {
        await addVideo({ data: newNews[i], richtextId, dispatch })
      }
      if (newNews[i]?.lessonImg) {
        await addImage({ data: newNews[i], richtextId, dispatch })
      }
      if (newNews[i]?.textHeading || newNews[i]?.textDescription) {
        await addText({ data: newNews[i], richtextId, dispatch })
      }
    }
    dispatch({ type: NEWS_CLEAR, payload: data })
    document.location.href = '/news'
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: NEWS_UPDATE_FAIL, payload: message })
  }
}
