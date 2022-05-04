import { createSlice } from "@reduxjs/toolkit";

import { mockedCourses } from "utils/mocked/courses";

const initialState = {
  list: [...mockedCourses],
  selectedArticle: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      state.list = [...payload];
    },

    createCourse: (state, { payload }) => {
      state.list = [...state.list, payload];
    },

    setSelectedCourse: (state, { payload }) => {
      state.selectedArticle = payload;
    },

    removeSelectedCourse: (state) => {
      state.selectedArticle = null;
    },
  },
});

const {
  reducer: coursesReducer,
  actions: {
    setCourses,
    createCourse,
    setSelectedCourse,
    removeSelectedCourse,
  },
} = coursesSlice;

export {
  coursesReducer,
  setCourses,
  createCourse,
  setSelectedCourse,
  removeSelectedCourse,
};
