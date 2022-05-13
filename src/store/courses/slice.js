import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      state.list = [...payload];
    },
  },
});

const {
  reducer: coursesReducer,
  actions: { setCourses },
} = coursesSlice;

export { coursesReducer, setCourses };
