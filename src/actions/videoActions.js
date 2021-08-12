import { Axios, ADD_VIDEOS, GET_VIDEOS } from '../utils/urlConstants'

import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
  VIDEO_UPDATE_FAIL,
  VIDEO_DELETE_REQUEST,
  VIDEO_DELETE_SUCCESS,
  VIDEO_DELETE_FAIL
} from '../constants/videoConstants'

export const createVideo =
  (
    videoCover,
    videoTitle,
    videoDescription,
    videoLink,
    videoResource,
    lessonId,
    newsId
  ) =>
    async (dispatch) => {
      const videoData = new FormData()
      videoData.append('videoCover', videoCover)
      videoData.append('videoTitle', videoTitle)
      videoData.append('videoDescription', videoDescription)
      videoData.append('videoLink', videoLink)
      videoData.append('videoResource', videoResource)
      newsId ? videoData.append('newsId', newsId) : videoData.append('lessonId', lessonId)
      console.log(videoCover, videoTitle, videoDescription, videoLink, videoResource, lessonId, newsId)
      try {
        dispatch({ type: VIDEO_CREATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await Axios.post(ADD_VIDEOS, videoData, config)
        dispatch({ type: VIDEO_CREATE_SUCCESS, payload: data })
      } catch (error) {
        dispatch({
          type: VIDEO_CREATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const updateVideo =
  (
    id,
    videoCover,
    videoTitle,
    videoDescription,
    videoLink,
    videoResource,
    setEditVideoModel,
    refetch
  ) =>
    async (dispatch) => {
      const videoData = new FormData()
      videoData.append('videoCover', videoCover)
      videoData.append('videoTitle', videoTitle)
      videoData.append('videoDescription', videoDescription)
      videoData.append('videoLink', videoLink)
      videoData.append('videoResource', videoResource)

      try {
        dispatch({ type: VIDEO_UPDATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await Axios.put(GET_VIDEOS + `/${id}`, videoData, config)
        dispatch({ type: VIDEO_UPDATE_SUCCESS, payload: data })
        setEditVideoModel(false)
      } catch (error) {
        dispatch({
          type: VIDEO_UPDATE_FAIL,
          payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    }

export const deleteVideo = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_DELETE_REQUEST })
    const { data } = await Axios.delete(GET_VIDEOS + `/${id}`)
    dispatch({ type: VIDEO_DELETE_SUCCESS, payload: data })
    refetch()
  } catch (error) {
    dispatch({
      type: VIDEO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
