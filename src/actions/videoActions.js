import { Axios, ADD_VIDEOS, GET_VIDEOS } from '../utils/urlConstants'

import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
  VIDEO_UPDATE_FAIL
} from '../constants/videoConstants'

export const createVideo =
  (
    videoCover,
    videoTitle,
    videoDescription,
    videoLink,
    videoResource,
    lessonId
  ) =>
    async (dispatch) => {
      const videoData = new FormData()
      videoData.append('videoCover', videoCover)
      videoData.append('videoTitle', videoTitle)
      videoData.append('videoDescription', videoDescription)
      videoData.append('videoLink', videoLink)
      videoData.append('videoResource', videoResource)
      videoData.append('lessonId', lessonId)

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
        refetch()
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
