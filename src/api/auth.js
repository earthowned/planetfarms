import { apiInstance } from "./instance";

export const login = ({ id, name, password }) =>
  apiInstance.post("users/login", { id, name, password });

export const register = ({ name, password }) =>
  apiInstance.post("users/register", { name, password });

export const getToken = () => apiInstance.get("users/token");

export const changePassword = ({ oldPassword, newPassword }) =>
  apiInstance.post("/users/changePassword", { oldPassword, newPassword });

export const forgotPassword = (username) =>
  apiInstance.post("/users/forgotPassword", { username });

export const forgotPasswordSubmit = ({ username, code, newPassword }) =>
  apiInstance.post("/users/forgotPasswordSubmit", {
    username,
    code,
    newPassword,
  });

export const confirmSignup = ({ username, code }) =>
  apiInstance.post("/users/confirmSignUp", {
    username,
    code,
  });
