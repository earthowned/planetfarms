import { apiInstance } from "./instance";

export const login = ({ id, username, password }) =>
  apiInstance.post("users/login", { id, username, password });

export const register = ({ username, password }) =>
  apiInstance.post("users/register", { username, password });

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

export const confirmEmail = ({ email, code }) =>
  apiInstance.post("/users/confirm-sign-up", {
    code,
    username: email,
  });

export const resendEmailCode = ({ email }) =>
  apiInstance.post("/users/resend-sign-up-code", { username: email });
