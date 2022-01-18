/* eslint-disable no-return-await */
import axios from "axios";

export const fileHeader = {
  headers: { "Content-Type": "multipart/form-data" },
};

export const configFunc = (options = { headers: {} }) => {
  const userdata = window.localStorage.getItem("userInfo");
  const headers = { "Content-Type": "application/json" };
  const token = userdata && JSON.parse(userdata).token;
  headers.Authorization = token && `Bearer ${token}`;
  return { headers: { ...headers, ...options.headers } };
};

export const getApi = async (dispatch, url, config) => {
  return await axios.get(url, configFunc(config));
};

export const postApi = async (dispatch, url, data, config) => {
  return await axios.post(url, data, configFunc(config));
};

export const putApi = async (dispatch, url, data, config) => {
  return await axios.put(url, data, configFunc(config));
};

export const deleteApi = async (url, config) => {
  return await axios.delete(url, configFunc(config));
};
