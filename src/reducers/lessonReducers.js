import {
  LESSON_CREATE_REQUEST,
  LESSON_CREATE_SUCCESS,
  LESSON_CREATE_FAIL,
  LESSON_CREATE_RESET,
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
