import axios from "axios";
import { configFunc, getApi, postApi } from "../utils/apiFunc";
import {
  GROUP_LIST_REQUEST,
  GROUP_LIST_SUCCESS,
  GROUP_LIST_FAIL,
  GROUP_SEARCH_REQUEST,
  GROUP_SEARCH_SUCCESS,
  GROUP_SEARCH_FAIL,
  GROUP_CREATE_REQUEST,
  GROUP_CREATE_SUCCESS,
  GROUP_CREATE_FAIL,
  GROUP_LIST_BYID_REQUEST,
  GROUP_LIST_BYID_SUCCESS,
  GROUP_LIST_BYID_FAIL,
  GROUP_UPDATE_REQUEST,
  GROUP_UPDATE_SUCCESS,
  GROUP_UPDATE_FAIL,
  GROUP_DELETE_REQUEST,
  GROUP_DELETE_SUCCESS,
  GROUP_DELETE_FAIL,
  GROUP_FOLLOW_REQUEST,
  GROUP_FOLLOW_SUCCESS,
  GROUP_FOLLOW_FAIL,
  USER_GROUP_LIST_REQUEST,
  USER_GROUP_LIST_SUCCESS,
  USER_GROUP_LIST_FAIL,
} from "../constants/communityGroupConstants";

// fetching current community
const currentCommunity = localStorage.getItem("currentCommunity")
  ? JSON.parse(localStorage.getItem("currentCommunity"))
  : null;

export const listGroups =
  ({ pageNumber = "" }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GROUP_LIST_REQUEST });
      const { data } = await getApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/groups/community/${currentCommunity.id}?pageNumber=${pageNumber}`
      );
      dispatch({ type: GROUP_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GROUP_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const searchGroups = (search) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_SEARCH_REQUEST });
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/groups/community/${currentCommunity.id}/search?title=${search}`
    );
    dispatch({ type: GROUP_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GROUP_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createGroup = (newGroup) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("title", newGroup.title);
  formData.append("description", newGroup.description);
  formData.append("group", newGroup.file);
  formData.append("category", newGroup.category);
  try {
    dispatch({ type: GROUP_CREATE_REQUEST });
    const { data } = await postApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/groups/add/community/${currentCommunity.id}`,
      formData
    );
    dispatch({ type: GROUP_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GROUP_CREATE_FAIL, payload: message });
  }
};

export const listGroupById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_LIST_BYID_REQUEST });
    await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`
    );
    dispatch({ type: GROUP_LIST_BYID_SUCCESS, payload: true });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GROUP_LIST_BYID_FAIL, payload: message });
  }
};

export const groupUpdate = (newGroup) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_UPDATE_REQUEST });
    const formData = new FormData();
    formData.append("title", newGroup.title);
    formData.append("description", newGroup.description);
    formData.append("group", newGroup.file);
    formData.append("category", newGroup.category);
    const { id } = newGroup;
    const config = configFunc();
    const data = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`,
      formData,
      config
    );
    dispatch({ type: GROUP_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GROUP_UPDATE_FAIL, payload: message });
  }
};

export const groupDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_DELETE_REQUEST });
    const config = configFunc();
    const data = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`,
      config
    );
    dispatch({ type: GROUP_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GROUP_DELETE_FAIL, payload: message });
  }
};

export const followGroup = (groupId) => async (dispatch, getState) => {
  try {
    dispatch({ type: GROUP_FOLLOW_REQUEST });
    await postApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/groups-users/follow`,
      { groupId }
    );
    dispatch({ type: GROUP_FOLLOW_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GROUP_FOLLOW_FAIL, payload: message });
  }
};

export const listUserGroups =
  ({ communityId, pageNumber = "" }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_GROUP_LIST_REQUEST });
      const { data } = await getApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/groups/community/${communityId}/user?pageNumber=${pageNumber}`
      );
      dispatch({ type: USER_GROUP_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_GROUP_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
