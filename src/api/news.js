import { apiInstance } from "./instance";

export const list = ({ community, page = 0 }) =>
  apiInstance
    .get(`news/community/${community}?pageNumber=${page}`)
    .then((response) => response.data);
