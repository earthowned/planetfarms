import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL + "/api/";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

//get categories
export const CATEGORY = "categories";
