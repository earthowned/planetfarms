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

export const edit = ({
  news,
  title,
  creator,
  category,
  readTime,
  articleId,
  richtextId,
  communityId,
}) =>
  multipartApiInstance.put(
    `news/${articleId}`,
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

export const createTextBlock = ({ title, text, richTextId, order }) =>
  apiInstance.post("texts/add", {
    order,
    textHeading: title,
    textDescription: text,
    richtextId: richTextId,
  });

export const updateTextBlock = ({ title, text, id, order }) =>
  apiInstance.put(`texts/${id}`, {
    order,
    textHeading: title,
    textDescription: text,
  });

export const deleteTextBlock = ({ id }) => apiInstance.delete(`texts/${id}`);

export const createImageBlock = ({ description, file, order, richTextId }) =>
  multipartApiInstance.post(
    "photos/add",
    getFormData({
      order,
      img: file,
      richtextId: richTextId,
      isImgDesc: !!description,
      photoDescription: description,
    })
  );

export const updateImageBlock = ({ file, description, order, id }) =>
  multipartApiInstance.put(
    `photos/${id}`,
    getFormData({
      order,
      img: file,
      isImgDesc: !!description,
      photoDescription: description,
    })
  );

export const deleteImageBlock = ({ id }) => apiInstance.delete(`photos/${id}`);

export const createVideoBlock = ({
  file,
  link,
  title,
  order,
  richTextId,
  description,
}) =>
  multipartApiInstance.post(
    "videos/add",
    getFormData({
      order,
      videoTitle: title,
      videoResource: file,
      videoLink: link || "",
      richtextId: richTextId,
      videoDescription: description,
    })
  );

export const updateVideoBlock = ({
  id,
  file,
  link,
  order,
  title,
  description,
}) =>
  multipartApiInstance.put(
    `videos/${id}`,
    getFormData({
      order,
      videoTitle: title,
      videoResource: file,
      videoLink: link || "",
      videoDescription: description,
    })
  );

export const deleteVideoBlock = ({ id }) => apiInstance.delete(`videos/${id}`);
