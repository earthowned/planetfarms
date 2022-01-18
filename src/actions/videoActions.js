import { ADD_VIDEOS, GET_VIDEOS } from "../utils/urlConstants";
import { postApi, putApi, deleteApi, fileHeader } from "../utils/apiFunc";

import {
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
  VIDEO_UPDATE_FAIL,
  VIDEO_DELETE_REQUEST,
  VIDEO_DELETE_SUCCESS,
  VIDEO_DELETE_FAIL,
} from "../constants/videoConstants";
import { getFormData } from "../utils/getFormData";

export const createVideo = (vData) => async (dispatch) => {
  const videoData = getFormData(vData);
  try {
    dispatch({ type: VIDEO_CREATE_REQUEST });
    const { data } = await postApi(dispatch, ADD_VIDEOS, videoData, fileHeader);
    dispatch({ type: VIDEO_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VIDEO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateVideo =
  ({ id, vData, setEditVideoModel, refetch }) =>
  async (dispatch) => {
    const videoData = getFormData(vData);
    try {
      dispatch({ type: VIDEO_UPDATE_REQUEST });
      const { data } = await putApi(
        dispatch,
        `${GET_VIDEOS}/${id}`,
        videoData,
        fileHeader
      );
      dispatch({ type: VIDEO_UPDATE_SUCCESS, payload: data });
      setEditVideoModel(false);
      refetch();
    } catch (error) {
      dispatch({
        type: VIDEO_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteVideo = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_DELETE_REQUEST });
    const { data } = await deleteApi(`${GET_VIDEOS}/${id}`);
    dispatch({ type: VIDEO_DELETE_SUCCESS, payload: data });
    refetch();
  } catch (error) {
    dispatch({
      type: VIDEO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
