import { Auth, Amplify } from "aws-amplify";

import { api } from "api";
import { authConfig } from "config/amplify";
import { setIsLoading } from "store/loader/slices";

import { setCurrentUser, setIsAuthed } from "./slices";

const isCognito = process.env.REACT_APP_AUTH_METHOD === "cognito";

if (isCognito) {
  Amplify.configure({ Auth: { ...authConfig } });
}

export const registerThunk =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      await api.auth.register({ username: name, password });

      if (isCognito) {
        return Promise.resolve({ confirmEmail: true });
      }

      return Promise.resolve({ confirmEmail: false });
    } catch (error) {
      return Promise.reject(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const loginThunk =
  ({ name, password }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      let data;
      let username = name;

      if (isCognito) {
        if (username.includes("@")) username = username.replace(/@/g, "");
        const response = await Auth.signIn(username, password);

        data = {
          id: response?.attributes?.sub || "",
          token: response?.signInUserSession?.idToken?.jwtToken || "",
        };
      } else {
        const response = await api.auth.login({ username, password });
        data = { ...response.data };
      }

      localStorage.setItem("userInfo", JSON.stringify(data));
      const authData = isCognito ? { id: data.id } : { username, password };

      await api.auth.login(authData);
      const user = await api.user.get({ id: data.id });
      const profile = { ...user?.data?.results };

      dispatch(setIsAuthed(true));
      dispatch(setCurrentUser(profile));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getCurrentUserThunk = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const storage = JSON.parse(window.localStorage.getItem("userInfo"));

    if (!storage || !storage.id) {
      return Promise.resolve({ isAuthed: false });
    }

    const response = await api.user.get({ id: storage.id });

    dispatch(setIsAuthed(true));
    dispatch(setCurrentUser({ ...response?.data?.results }));

    return Promise.resolve();
  } catch (error) {
    dispatch(setIsAuthed(false));
    return Promise.reject(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

// TODO: Why there is no functionality to request code without cognito?
export const requestCodeThunk = (username) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    let response;
    if (isCognito) {
      const data = await api.auth.forgotPassword(username);
      response =
        data.data.details.CodeDeliveryDetails.AttributeName.split("_").join(
          " "
        );
    }
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const resetPasswordThunk =
  ({ username, code, password }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      if (isCognito) {
        await api.auth.forgotPasswordSubmit(username, code, password);
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const changePasswordThunk =
  ({ oldPassword, newPassword }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

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
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const confirmEmailThunk =
  ({ code, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      await api.auth.confirmEmail({ email, code });
      await dispatch(loginThunk({ name: email, password }));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const requestConfirmEmailCodeThunk =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      await api.auth.resendEmailCode({ email });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
