import { apiInstance, multipartApiInstance } from "./instance";
/*
    filter: My | Paid | All
    sort: Popular | Cheap | Expensive | RateDescending | RateAscending | AlphabetDescending | AlphabetAscending
*/
export const list = ({ pageSize, page, search, sort, filter, cancelToken }) =>
  apiInstance.get("/courses", {
    cancelToken,
    params: { pageNumber: page, pageSize, search, sort, filter },
  });

export const uploadImages = (images) =>
  multipartApiInstance
    .post("/photos", images)
    .then((response) => response?.data?.data || []);

export const create = ({
  title,
  price,
  thumbnail,
  isPublished,
  description = [],
}) =>
  apiInstance.post("/courses", {
    title,
    price,
    thumbnail,
    isPublished,
    description,
  });

export const update = ({
  id,
  title,
  price,
  thumbnail,
  isPublished,
  description = [],
}) =>
  apiInstance.put(`/courses/${id}`, {
    title,
    price,
    thumbnail,
    isPublished,
    description,
  });

export const get = ({ id }) => apiInstance.get(`/courses/${id}`);

export const remove = ({ id }) => apiInstance.delete(`/courses/${id}`);
