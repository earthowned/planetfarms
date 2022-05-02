import Amplify, { Auth } from "aws-amplify";

import { api } from "api";
import { authConfig } from "config/amplify";
import { getErrorMessage } from "utils/error";
import { setCurrentUser } from "store/user/slices";
import {
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  ACCESS_TOKEN_SUCCESS,
} from "constants/userConstants";

// import { news } from "./community";
// import { visitCommunity } from "./communityActions";

const isCognito = process.env.REACT_APP_AUTH_METHOD === "cognito";

if (isCognito) {
  Amplify.configure({ Auth: { ...authConfig } });
}

// TODO: Move to store/thunk when reduxjs/toolkit will be setuped
const makeLogout = (dispatch) => {
  // dispatch({ type: USER_DETAILS_FAIL, payload: message });
  localStorage.clear();
  dispatch({ type: USER_LOGOUT });
  window.location.href = "/login";
};

export const logout = () => async (dispatch) => {
  try {
    if (isCognito) await Auth.signOut();
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  } finally {
    makeLogout(dispatch);
  }
};

// TODO: Move to store/thunk when reduxjs/toolkit will be setuped
export const getAccessToken = () => async (dispatch) => {
  try {
    const response = await api.auth.getToken();

    if (response.status !== 201) {
      makeLogout(dispatch);
      return Promise.reject();
    }

    dispatch({ type: ACCESS_TOKEN_SUCCESS, payload: true });
    return Promise.resolve();
  } catch (error) {
    makeLogout(dispatch);
    return Promise.reject(error);
  }
};

// TODO: Move to store/thunk when reduxjs/toolkit will be setuped
export const login =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      let authData = {};
      let response;
      if (isCognito) {
        response = await Auth.signIn(name, password);
        const id = response?.attributes?.sub || "";
        authData = {
          id,
          token: response?.signInUserSession?.idToken?.jwtToken || "",
        };
        await api.auth.login({ id });
      } else {
        response = await api.auth.login({ name, password });
        authData = response.data;
      }

      localStorage.setItem("userInfo", JSON.stringify(authData));

      const profile = await api.user.get({ id: authData.id });
      dispatch(setCurrentUser({ ...response, ...profile?.data?.results }));

      // await getAccessToken()(dispatch); // access token is already received in login response
      // const community = await news()(dispatch);
      // await visitCommunity(community.id)(dispatch);

      dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
      return Promise.resolve(response);
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL, payload: getErrorMessage(error) });
      return Promise.reject(error);
    }
  };

export const register =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      await api.auth.register({ name, password });
      await login({ name, password })(dispatch);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

// TODO: Why there is no functionality to request code without cognito?
export const requestCode = async (username) => {
  try {
    let response;
    if (isCognito) {
      const data = await api.auth.forgotPassword(username);
      response = data.CodeDeliveryDetails.AttributeName.split("_").join(" ");
    }
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const resetPassword = async ({ username, code, password }) => {
  try {
    if (isCognito) {
      await api.auth.forgotPasswordSubmit(username, code, password);
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const changePassword = async ({ oldPassword, newPassword }) => {
  try {
    if (isCognito) {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
    } else {
      await api.auth.changePassword({ oldPassword, newPassword });
    }

    return Promise.resolve();
  } catch (error) {
    // TODO: From backend receive wrong error object;
    // TODO: Backend_Bug: Always incorrect password error, but password has been changed;
    return Promise.reject(error);
  }
};
