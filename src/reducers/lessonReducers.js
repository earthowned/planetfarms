import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL,
  LESSON_CREATE_RESET,
  LESSON_UPDATE_REQUEST,
  LESSON_UPDATE_SUCCESS,
  LESSON_UPDATE_FAIL,
  LESSON_DELETE_REQUEST,
  LESSON_DELETE_SUCCESS,
  LESSON_DELETE_FAIL,
} from "../constants/lessonConstants";

export const lessonCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSON_CREATE_REQUEST:
      return { loading: true };
    case LESSON_CREATE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case LESSON_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case LESSON_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const lessonUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSON_UPDATE_REQUEST:
      return { loading: true };
    case LESSON_UPDATE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case LESSON_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const lessonDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LESSON_DELETE_REQUEST:
      return { loading: true };
    case LESSON_DELETE_SUCCESS:
      return { loading: false, success: true, course: action.payload };
    case LESSON_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
