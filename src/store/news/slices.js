import { createSlice } from "@reduxjs/toolkit";

const initialState = { previewedArticle: null };

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPreviewArticle: (state, { payload }) => {
      state.previewedArticle = { ...payload };
    },

    removePreviewArticle: (state) => {
      state.previewedArticle = null;
    },
  },
});

const {
  reducer: newsReducer,
  actions: { setPreviewArticle, removePreviewArticle },
} = newsSlice;

export { newsReducer, setPreviewArticle, removePreviewArticle };
