import { apiInstance } from "./instance";

export const create = async () =>
  apiInstance.post("richtexts", {}).then((response) => response.data);
