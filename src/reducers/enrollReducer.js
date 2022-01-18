/* eslint-disable default-param-last */
import {
  ENROLL_CREATE_REQUEST,
  ENROLL_CREATE_SUCCESS,
  ENROLL_CREATE_FAIL,
  ENROLL_CREATE_RESET,
  ENROLL_UPDATE_REQUEST,
  ENROLL_UPDATE_SUCCESS,
  ENROLL_UPDATE_FAIL,
} from "../constants/enrollConstants";

export const addEnrollReducer = (state = {}, action) => {
  switch (action.type) {
    case ENROLL_CREATE_REQUEST:
      return { loading: true };
    case ENROLL_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case ENROLL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ENROLL_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const leaveCourseReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case ENROLL_UPDATE_REQUEST:
      return { loading: true };
    case ENROLL_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ENROLL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
