import { apiInstance } from "./instance";

export const get = ({ id }) => apiInstance.get(`/user/${id}`);
