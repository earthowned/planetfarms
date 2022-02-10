/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import Amplify, { Auth } from "aws-amplify";
import FormData from "form-data";

import { authConfig } from "config/amplify";

import { api } from "api";
import { getApi, postApi, putApi } from "../utils/apiFunc";

import {
  ACCESS_TOKEN_REQUEST,
  ACCESS_TOKEN_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGOUT,
  USER_CONFIRM_CODE_REQUEST,
  USER_CONFIRM_CODE_SUCCESS,
  USER_CONFIRM_CODE_FAIL,
  USER_RESEND_CODE_REQUEST,
  USER_RESEND_CODE_SUCCESS,
  USER_RESEND_CODE_FAIL,
  USER_ATTR_CONFIRM_CODE_REQUEST,
  USER_ATTR_CONFIRM_CODE_SUCCESS,
  USER_ATTR_CONFIRM_CODE_FAIL,
  USER_ATTR_RESEND_CODE_REQUEST,
  USER_ATTR_RESEND_CODE_SUCCESS,
  USER_ATTR_RESEND_CODE_FAIL,
  USER_PASSWORD_CHANGE_REQUEST,
  USER_PASSWORD_CHANGE_SUCCESS,
  USER_PASSWORD_CHANGE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAIL,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAIL,
} from "../constants/userConstants";

const isCognito = process.env.REACT_APP_AUTH_METHOD === "cognito";

if (isCognito) {
  Amplify.configure({ Auth: { ...authConfig } });
}

const tokenFailure = (dispatch, message) => {
  dispatch({ type: USER_DETAILS_FAIL, payload: message });
  window.localStorage.clear();
  dispatch({ type: USER_LOGOUT });
  window.location.href = "/login";
  return false;
};

export const logout = () => (dispatch) => {
  Auth.signOut()
    .then(() => {
      window.localStorage.clear();
      dispatch({ type: USER_LOGOUT });
      document.location.href = "/login";
    })
    .catch((err) => console.log(err));
};

function checkErrorReturnMessage(error, dispatch) {
  const message =
    error.response && error.response.data.error
      ? error.response.data.error
      : error.message;
  if (message === "Not authorized, token failed") {
    dispatch(logout());
  }
  return message;
}

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/users/profile/${id}`
    );
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: checkErrorReturnMessage(error, dispatch),
    });
  }
};

export const checkAndUpdateToken = () => async (dispatch) => {
  dispatch({ type: ACCESS_TOKEN_REQUEST });
  getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/token`)
    .then((data) => {
      if (data) {
        if (data?.response?.status === 201) {
          dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true });
          return true;
        }
      } else {
        return tokenFailure(dispatch, "Unauthorized");
      }
    })
    .catch(() => {
      return tokenFailure(dispatch, "Unauthorized");
      /* const message = data.response && data.response.data.name ? data.response.data.name : data.message
    if (message === 'TokenExpired') {
      if (process.env.REACT_APP_AUTH_METHOD === 'cognito') {
        Auth.currentSession().then((res) => {
          const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
          userInfo.token = res?.idToken?.jwtToken || ''
          if (userInfo.token == '') return tokenFailure(dispatch, message)
          else {
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo })
            dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true })
            return true
          }
        }).catch(data => tokenFailure(dispatch, 'Unauthorized'))
      } else {
        const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/token`, { id: userInfo.id }).then((res) => {
          userInfo.token = res?.token || ''
          if (userInfo.token == '') return tokenFailure(dispatch, message)
          else {
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo })
            dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true })
            return true
          }
        }).catch(data => tokenFailure(dispatch, 'Unauthorized'))
      }
    } else {
      return tokenFailure(dispatch, 'Unauthorized')
    } */
    });
};

export const getMyDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`
    );
    const userdata = data;
    if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
      const { attributes } = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      userdata.phoneVerified = attributes.phone_number_verified;
      userdata.emailVerified = attributes.email_verified;
    }
    dispatch({ type: USER_DETAILS_SUCCESS, payload: userdata });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: checkErrorReturnMessage(error, dispatch),
    });
  }
};

export const updateUser = (user, history) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const userProfileFormData = new FormData();
    userProfileFormData.append("firstName", user.firstName);
    userProfileFormData.append("lastName", user.lastName);
    userProfileFormData.append("phone", user?.phone);
    if (user.birthday) userProfileFormData.append("birthday", user.birthday);
    userProfileFormData.append("email", user.email);
    userProfileFormData.append("attachments", user.attachments);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    let currentUser;
    if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
      currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
    }
    const { data } = await putApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`,
      userProfileFormData,
      config
    );
    if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
      const toBeUpdated = {
        email: user.email,
        given_name: user.firstName,
        family_name: user.lastName,
        phone_number: user.phone ? user.phone : "",
      };
      if (user.birthday) toBeUpdated.birthdate = user.birthday;
      await Auth.updateUserAttributes(currentUser, toBeUpdated);
    }
    dispatch({ type: USER_DETAILS_SUCCESS, payload: { user: data } });
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: checkErrorReturnMessage(error, dispatch),
    });
  }
};

export const updateUserInfo =
  ({ firstName, lastName, avatar, phoneNumber, email, birthdate }) =>
  async (dispatch) => {
    try {
      const formData = new FormData();
      if (firstName) formData.append("firstName", firstName);
      if (lastName) formData.append("lastName", lastName);
      if (email) formData.append("email", email);
      if (phoneNumber) formData.append("phone", phoneNumber);
      if (birthdate) formData.append("birthday", birthdate);
      // if (avatar)
      //   formData.append("file", {
      //     ...avatar,
      //   });
      if (avatar) formData.append("attachments", avatar);

      let authedUser;

      if (isCognito) {
        authedUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
      }

      const response = await api.profile.update({ formData });
      // const updatedUser = await api.profile.get();
      // console.log("updatedUser", updatedUser);

      if (isCognito) {
        await Auth.updateUserAttributes(authedUser, {
          email: email || authedUser.email,
          birthdate: birthdate || authedUser.birthdate,
          given_name: firstName || authedUser.given_name,
          family_name: lastName || authedUser.family_name,
          phoneNumber: phoneNumber || authedUser.phone_number,
        });
      }

      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: { user: response.data },
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/users`
    );
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: checkErrorReturnMessage(error, dispatch),
    });
  }
};

export const searchUsers = (search) => async (dispatch) => {
  try {
    dispatch({ type: USER_SEARCH_REQUEST });
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/users/search?name=${search}`
    );
    dispatch({ type: USER_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const confirmPin = (username, code) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_CODE_REQUEST });
    if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
      const { data } = await Auth.confirmSignUp(username, code);
      dispatch({ type: USER_CONFIRM_CODE_SUCCESS, payload: data });
    } else {
      document.location.href = "/";
    }
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_CODE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const resendCodeAction = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_RESEND_CODE_REQUEST });
    if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
      await Auth.resendSignUp(username);
      dispatch({ type: USER_RESEND_CODE_SUCCESS });
    } else {
      document.location.href = "/";
    }
  } catch (error) {
    dispatch({
      type: USER_RESEND_CODE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const verifyCurrentUserAttribute = (attr) => async (dispatch) => {
  try {
    dispatch({ type: USER_ATTR_RESEND_CODE_REQUEST });
    dispatch({ type: USER_ATTR_CONFIRM_CODE_REQUEST });
    if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
      await Auth.verifyCurrentUserAttribute(attr);
      dispatch({ type: USER_ATTR_RESEND_CODE_SUCCESS });
    } else {
      document.location.href = "/";
    }
  } catch (error) {
    dispatch({
      type: USER_ATTR_RESEND_CODE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const verifyCurrentUserAttributeSubmit =
  (attr, code) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_ATTR_CONFIRM_CODE_REQUEST });
      dispatch({ type: USER_ATTR_RESEND_CODE_REQUEST });
      const {
        userDetails: { user },
      } = getState();
      if (process.env.REACT_APP_AUTH_METHOD === "cognito") {
        await Auth.verifyCurrentUserAttributeSubmit(attr, code);
        const userdata = user;
        const { attributes } = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        userdata.phoneVerified = attributes.phone_number_verified;
        userdata.emailVerified = attributes.email_verified;
        dispatch({ type: USER_DETAILS_SUCCESS, payload: userdata });
        dispatch({ type: USER_ATTR_CONFIRM_CODE_SUCCESS });
      } else {
        document.location.href = "/myProfile";
      }
    } catch (error) {
      dispatch({
        type: USER_ATTR_CONFIRM_CODE_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    let resdata;
    try {
      dispatch({ type: USER_PASSWORD_CHANGE_REQUEST });
      if (process.env.REACT_APP_AUTH_METHOD !== "cognito") {
        const { data } = await postApi(
          dispatch,
          `${process.env.REACT_APP_API_BASE_URL}/api/users/changePassword`,
          { oldPassword, newPassword }
        );
        resdata = data;
      } else {
        const user = await Auth.currentAuthenticatedUser();
        resdata = await Auth.changePassword(user, oldPassword, newPassword);
      }
      dispatch({ type: USER_PASSWORD_CHANGE_SUCCESS, payload: resdata });
    } catch (error) {
      dispatch({
        type: USER_PASSWORD_CHANGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.__type === "NotAuthorizedException"
              ? "Incorrect old password."
              : error.response.data.message
            : error.message,
      });
    }
  };
