import { apiInstance } from "./instance";

export const login = ({ name, password }) =>
  apiInstance.post("users/login", { name, password });

export const register = ({ name, password }) =>
  apiInstance.post("users", { name, password });

export const getToken = () => apiInstance.get("users/token");

export const changePassword = ({ oldPassword, newPassword }) =>
  apiInstance.post("/users/changePassword", { oldPassword, newPassword });
