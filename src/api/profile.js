import { apiInstance, multipartApiInstance } from "./instance";

export const update = ({
  phone,
  email,
  lastName,
  birthday,
  formData,
  firstName,
}) => {
  if (formData) {
    return multipartApiInstance.put("users/profile", formData);
  }

  return apiInstance.put("users/profile", {
    phone,
    email,
    lastName,
    birthday,
    firstName,
  });
};

export const get = () => apiInstance.get("users/profile");
