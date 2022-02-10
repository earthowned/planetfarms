import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/`,
});

export const multipartApiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/`,
});

const getAxiosConfig = (axiosConfig, contentType) => {
  const data = localStorage.getItem("userInfo");
  let token;
  if (data) token = JSON.parse(data).token;

  const config = {
    ...axiosConfig,
    headers: { ...axiosConfig.headers, "Content-Type": contentType },
  };

  if (token) config.headers.Authorization = `Bearer ${token}`;
  else delete config.headers.Authorization;

  return { ...config };
};

apiInstance.interceptors.request.use(async (config) =>
  getAxiosConfig(config, "application/json")
);

multipartApiInstance.interceptors.request.use(async (config) =>
  getAxiosConfig(config, "multipart/form-data")
);
