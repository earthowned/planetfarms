import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL + "/api/";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

// categories
export const CATEGORY = "categories";

//course
export const ADD_COURSE = "courses/add";
