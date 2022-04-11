import { apiInstance } from "./instance";

export const get = ({ id }) => apiInstance.get(`/users/profile/${id}`);
