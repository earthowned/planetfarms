import { Axios, ADD_VIDEOS } from '../utils/urlConstants'

import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
} from '../constants/videoConstants'

export const createVideo = (videoDataToPost, lessonId) => async (dispatch) => {
  const videoData = new FormData()
  videoData.append('videoCover', videoDataToPost.videoCover)
  videoData.append('videoTitle', videoDataToPost.videoTitle)
  videoData.append('videoDescription', videoDataToPost.videoDescription)
  videoData.append('videoLink', videoDataToPost.videoLink)
  videoData.append('videoResource', videoDataToPost.videoResource)
  videoData.append('lessonId', lessonId)

  try {
    dispatch({ type: VIDEO_CREATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    const { data } = await Axios.post(ADD_VIDEOS, videoData, config)
    dispatch({ type: VIDEO_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: VIDEO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
