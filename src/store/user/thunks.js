import { api } from "api";
import { getErrorMessage } from "utils/error";

import { setCurrentUser } from "./slices";

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
