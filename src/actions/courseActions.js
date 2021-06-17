import { Axios, ADD_COURSE } from "../utils/urlConstants";
import {
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL,
} from "../constants/courseConstants";

export const createResource =
  (title, description) => async (dispatch, getState) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    //   formData.append('file', newCourse.file)
    try {
      dispatch({ type: COURSE_CREATE_REQUEST });
      const config = {
        headers: {
          // Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await Axios.post(ADD_COURSE, formData, config);
      dispatch({ type: COURSE_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COURSE_CREATE_FAIL, payload: message });
    }
  };
