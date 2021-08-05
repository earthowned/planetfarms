import { ADD_VIDEOS } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL
} from '../constants/videoConstants'

export const createVideo =
  (
    videoCover,
    videoTitle,
    videoDescription,
    videoLink,
    videoResource,
    lessonId,
    newsId,
  ) =>
    async (dispatch) => {
      const videoData = new FormData()
      videoData.append('videoCover', videoCover)
      videoData.append('videoTitle', videoTitle)
      videoData.append('videoDescription', videoDescription)
      videoData.append('videoLink', videoLink)
      videoData.append('videoResource', videoResource)
      newsId ? videoData.append('newsId', newsId) : videoData.append('lessonId', lessonId)

      try {
        dispatch({ type: VIDEO_CREATE_REQUEST })
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        const { data } = await postApi(dispatch, ADD_VIDEOS, videoData, config)
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
