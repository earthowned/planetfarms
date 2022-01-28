import { apiInstance } from "./instance";

export const update = ({ firstName, lastName, birthday, phone, email }) =>
  apiInstance.put("users/profile", {
    phone,
    email,
    lastName,
    birthday,
    firstName,
  });
