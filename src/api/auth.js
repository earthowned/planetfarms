import { apiInstance } from "./instance";

export const login = ({ id, name, password }) =>
  apiInstance.post("users/login", { id, name, password });

export const register = ({ name, password }) =>
  apiInstance.post("users/register", { name, password });

export const getToken = () => apiInstance.get("users/token");

export const changePassword = ({ oldPassword, newPassword }) =>
  apiInstance.post("/users/change-password", { oldPassword, newPassword });

export const forgotPassword = (username) =>
  apiInstance.post("/users/forgot-password", { username });

export const forgotPasswordSubmit = ({ username, code, newPassword }) =>
  apiInstance.post("/users/forgot-password-submit", {
    username,
    code,
    newPassword,
  });

export const confirmSignup = ({ username, code }) =>
  apiInstance.post("/users/confirm-sign-up", {
    username,
    code,
  });
