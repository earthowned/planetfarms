import { apiInstance } from "./instance";

export const list = ({ page = 0, query = "", filters = [] }) => {
  let url = `news?pageNumber=${page}`;

  if (query) url += `?title=${query}`;
  if (filters.length) url += `?filter=${filters}`;

  return apiInstance.get(url);
};
