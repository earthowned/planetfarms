import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false };

const slice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

const {
  reducer: loaderReducer,
  actions: { setIsLoading },
} = slice;

export { loaderReducer, setIsLoading };
