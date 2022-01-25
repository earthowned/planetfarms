import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/`,
});

apiInstance.interceptors.request.use(async (axiosConfig) => {
  const data = localStorage.getItem("userInfo");
  let token;
  if (data) token = JSON.parse(data).token;

  const config = {
    ...axiosConfig,
    headers: { ...axiosConfig.headers, "Content-Type": "application/json" },
  };

  if (token) config.headers.Authorization = `Bearer ${token}`;
  else delete config.headers.Authorization;

  return { ...config };
});
