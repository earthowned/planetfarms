import { Axios, ADD_VIDEOS } from '../utils/urlConstants'

import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
} from '../constants/videoConstants'

export const addVideo =
  ({ vData }) =>
  async (dispatch) => {
    try {
      dispatch({ type: VIDEO_CREATE_REQUEST })
      const { data } = await Axios.post(ADD_VIDEOS, vData)
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
