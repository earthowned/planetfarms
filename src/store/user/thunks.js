import { Auth, Amplify } from "aws-amplify";

import { api } from "api";
import { authConfig } from "config/amplify";
import { getErrorMessage } from "utils/error";

import { setCurrentUser } from "./slices";

const isCognito = process.env.REACT_APP_AUTH_METHOD === "cognito";

if (isCognito) {
  Amplify.configure({ Auth: { ...authConfig } });
}

export const registerThunk =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      // TODO: Set isLoading;
      await api.auth.register({ username: name, password });

      if (isCognito) {
        return Promise.resolve({ confirmEmail: true });
      }

      return Promise.resolve({ confirmEmail: false });
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const loginThunk =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      // TODO: Set isLoading

      let response;
      let data = {};
      let username = name;

      if (isCognito) {
        if (username.includes("@")) username = username.replace(/@/g, "");
        response = await Auth.signIn(username, password);

        data = {
          id: response?.attributes?.sub || "",
          token: response?.signInUserSession?.idToken?.jwtToken || "",
        };

        await api.auth.login({ id: data.id });
      }

      if (!isCognito) {
        response = await api.auth.login({ username, password });
        data = { ...response.data };
      }

      const user = await api.user.get({ id: data.id });
      const profile = { ...response, ...user?.data?.results };

      dispatch(setCurrentUser(profile));
      localStorage.setItem("userInfo", JSON.stringify(data));

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const getCurrentUserThunk = () => async (dispatch) => {
  try {
    const storage = JSON.parse(window.localStorage.getItem("userInfo"));

    if (!storage || !storage.id) {
      return Promise.resolve({ isAuthed: false });
    }

    const response = await api.user.get({ id: storage.id });
    dispatch(setCurrentUser({ ...response?.data?.results }));

    return Promise.resolve({ isAuthed: true });
  } catch (error) {
    return Promise.reject(getErrorMessage(error));
  }
};
