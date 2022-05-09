import Amplify, { Auth } from "aws-amplify";

import { api } from "api";
import { authConfig } from "config/amplify";
import { USER_LOGOUT } from "constants/userConstants";

const isCognito = process.env.REACT_APP_AUTH_METHOD === "cognito";

if (isCognito) {
  Amplify.configure({ Auth: { ...authConfig } });
}

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
