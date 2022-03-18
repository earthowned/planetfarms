import { apiInstance } from "./instance";

export const list = ({ page = 0, query = "", filters = [], cancelToken }) => {
  return apiInstance.get("news", {
    cancelToken,
    params: { pageNumber: page, title: query, filter: filters.toString() },
  });
};
