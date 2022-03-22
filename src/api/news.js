import { getFormData } from "utils/getFormData";
import { apiInstance, multipartApiInstance } from "./instance";

export const get = ({ id }) => apiInstance.get(`news/${id}`);

export const list = ({ page = 0, query = "", filters = [], cancelToken }) => {
  return apiInstance.get("news", {
    cancelToken,
    params: { pageNumber: page, title: query, filter: filters.toString() },
  });
};

export const create = ({
  news,
  title,
  creator,
  category,
  readTime,
  richtextId,
  communityId,
}) =>
  multipartApiInstance.post(
    "news/add",
    getFormData({
      news,
      title,
      creator,
      category,
      readTime,
      richtextId,
      communityId,
    })
  );

export const remove = ({ newsId }) => apiInstance.delete(`/news/${newsId}`);
