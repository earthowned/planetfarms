import { getApi } from "../utils/apiFunc";
import {
  MEMBER_LIST_FAIL,
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
} from "../constants/memberConstants";

// fetching current community
const currentCommunity = window.localStorage.getItem("currentCommunity")
  ? JSON.parse(window.localStorage.getItem("currentCommunity"))
  : null;

export const listMembers =
  ({ pageNumber, pageSize, search }) =>
  async (dispatch) => {
    try {
      dispatch({ type: MEMBER_LIST_REQUEST });
      const { data } = await getApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`
      );
      dispatch({
        type: MEMBER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MEMBER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
