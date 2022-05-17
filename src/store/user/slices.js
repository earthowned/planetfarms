import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthed: false, currentProfile: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentProfile = { ...payload };
    },
    setIsAuthed: (state, { payload }) => {
      state.isAuthed = payload;
    },
  },
});

const {
  reducer: userReducer,
  actions: { setCurrentUser, setIsAuthed },
} = userSlice;

export { userReducer, setCurrentUser, setIsAuthed };
