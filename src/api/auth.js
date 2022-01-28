import { apiInstance } from "./instance";

export const login = ({ name, password }) =>
  apiInstance.post("users/login", { name, password });

export const register = ({ id, name, password }) =>
  apiInstance.post("users", { id, name, password });

export const getToken = () => apiInstance.get("users/token");
