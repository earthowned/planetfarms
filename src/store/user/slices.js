import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentProfile: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentProfile = { ...payload };
    },
  },
});

const {
  reducer: userReducer,
  actions: { setCurrentUser },
} = userSlice;

export { userReducer, setCurrentUser };
