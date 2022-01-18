import { ADD_ENROLL, GET_ENROLL } from "../utils/urlConstants";
import { postApi, putApi } from "../utils/apiFunc";
import {
  ENROLL_CREATE_REQUEST,
  ENROLL_CREATE_SUCCESS,
  ENROLL_CREATE_FAIL,
  ENROLL_UPDATE_REQUEST,
  ENROLL_UPDATE_SUCCESS,
  ENROLL_UPDATE_FAIL,
} from "../constants/enrollConstants";

export const addEnroll = (courseId, history, refetch) => async (dispatch) => {
  try {
    dispatch({ type: ENROLL_CREATE_REQUEST });
    const { data } = await postApi(dispatch, ADD_ENROLL, { courseId });
    dispatch({ type: ENROLL_CREATE_SUCCESS, payload: data });
    refetch();
    if (history) {
      history.push(`/course/${courseId}`);
    }
  } catch (error) {
    dispatch({
      type: ENROLL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const leaveCourse = (courseId, history) => async (dispatch) => {
  try {
    dispatch({ type: ENROLL_UPDATE_REQUEST });
    const { data } = await putApi(dispatch, GET_ENROLL, { courseId });
    dispatch({ type: ENROLL_UPDATE_SUCCESS, payload: data });
    history.push("/courses");
  } catch (error) {
    dispatch({
      type: ENROLL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
