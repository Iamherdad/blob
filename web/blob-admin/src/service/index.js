import axios from "axios";
import { getToken } from "../config/token";
const request = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers["Authorization"] = token;
  return config;
});

request.interceptors.response.use(
  (config) => {
    if (config.data.code == -1) {
      throw Error(res.data.message);
    }
    return config.data;
  },
  (err) => {
    if (err.response?.status === 401) {
      //身份验证失败或过期，重新登陆
    }
  }
);

export default request;
