import { api } from "api";
import { getErrorMessage } from "utils/error";
import { parseArticleContent } from "utils/parsers/news";

import {
  getApi,
  putApi,
  postApi,
  deleteApi,
  // fileHeader,
} from "../utils/apiFunc";
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_SEARCH_REQUEST,
  NEWS_SEARCH_SUCCESS,
  NEWS_SEARCH_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAIL,
  NESW_SAVE_TEXT_DETAIL,
  NESW_SAVE_IMAGE_DETAIL,
  NESW_SAVE_VIDEO_DETAIL,
  NEWS_CLEAR,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
} from "../constants/newsConstants";

import { logout } from "./userAction";
import { createRichText, updateRichText } from "../utils/createUpdateRichText";
import { getFormData } from "../utils/getFormData";

// fetching current community
const currentCommunity = localStorage.getItem("currentCommunity")
  ? JSON.parse(localStorage.getItem("currentCommunity"))
  : null;

export const listNews =
  ({ pageNumber = "" }) =>
  async (dispatch) => {
    try {
      dispatch({ type: NEWS_LIST_REQUEST });
      const { data } = await getApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/news/community/${currentCommunity.id}?pageNumber=${pageNumber}`
      );
      dispatch({ type: NEWS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const searchNews = (search) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_SEARCH_REQUEST });
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/news/community/${currentCommunity.id}/search?title=${search}`
    );
    dispatch({ type: NEWS_SEARCH_SUCCESS, payload: data.title });
  } catch (error) {
    dispatch({
      type: NEWS_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNews =
  ({ newsDetail, newNews, history }) =>
  async (dispatch) => {
    const details = { communityId: currentCommunity.id, ...newsDetail };

    try {
      dispatch({ type: NEWS_CREATE_REQUEST });
      const richText = await postApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/richtexts`,
        {}
      );
      const richtextId = richText?.data?.richtext?.id;
      if (richtextId) {
        details.richtextId = richtextId;

        const response = await postApi(
          dispatch,
          `${process.env.REACT_APP_API_BASE_URL}/api/news/add`,
          details
          // fileHeader
        );

        const { data } = response;

        dispatch({ type: NEWS_CREATE_SUCCESS, payload: data });
        // creating rich text
        await createRichText(newNews, richtextId, dispatch);
        dispatch({ type: NEWS_CLEAR, payload: data });
        history.push(`/news/${data?.data?.id}`);
      }
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: NEWS_CREATE_FAIL, payload: message });
    }
  };

export const deleteNews = (id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_DELETE_REQUEST });
    // eslint-disable-next-line no-undef
    const data = await deleteApi(
      `${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`
    );
    dispatch({ type: NEWS_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({ type: NEWS_DELETE_FAIL, payload: message });
  }
};

export const savetextDetail = (data) => (dispatch) => {
  dispatch({
    type: NESW_SAVE_TEXT_DETAIL,
    payload: data,
  });
};

export const saveimageDetail = (data) => (dispatch) => {
  dispatch({
    type: NESW_SAVE_IMAGE_DETAIL,
    payload: data,
  });
};

export const savevideoDetail = (data) => (dispatch) => {
  dispatch({
    type: NESW_SAVE_VIDEO_DETAIL,
    payload: data,
  });
};

export const newsUpdate =
  ({ newsDetail, newNews, richtextId, id, history }) =>
  async (dispatch) => {
    const formData = getFormData(newsDetail);
    try {
      dispatch({ type: NEWS_UPDATE_REQUEST });
      const data = await putApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity?.id}`,
        formData
      );
      dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data });
      // updating rich text
      await updateRichText(newNews, richtextId, dispatch);
      dispatch({ type: NEWS_CLEAR, payload: data });
      history.push(`/news/${id}`);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: NEWS_UPDATE_FAIL, payload: message });
    }
  };

export const create =
  ({ title, userId, content, category, readTime, coverImage, communityId }) =>
  async (dispatch) => {
    try {
      const { richtext } = await api.richText.create();

      const response = await api.news.create({
        title,
        readTime,
        communityId,
        creator: userId,
        news: coverImage,
        category: [category],
        richtextId: richtext.id,
      });

      const { id: newsId } = response?.data?.data || {};
      await createRichText(content, richtext.id, dispatch);

      return Promise.resolve({ newsId });
    } catch (error) {
      return Promise.reject(getErrorMessage(error));
    }
  };

export const get = async ({ id }) => {
  try {
    const { data: article } = await api.news.get({ id });

    // TODO: Parse user info by id;
    // const author = await api.user.get({ id: article.creator });

    return Promise.resolve({
      article: { ...article, content: parseArticleContent(article) },
    });
  } catch (error) {
    return Promise.reject(getErrorMessage(error));
  }
};

export const remove = async ({ newsId }) => {
  try {
    await api.news.remove({ newsId });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(getErrorMessage(error));
  }
};
