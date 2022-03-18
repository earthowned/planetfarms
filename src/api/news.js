import { apiInstance } from "./instance";

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
  apiInstance.post("news/add", {
    news,
    title,
    creator,
    category,
    readTime,
    richtextId,
    communityId,
  });
