import { apiInstance } from "./instance";

export const news = () => apiInstance.get("communities/user");

export const userList = ({ page = 1 }) =>
  apiInstance.get(`/communities/user?pageNumber=${page}`);
