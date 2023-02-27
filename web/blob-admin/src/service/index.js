import axios from "axios";
import {
  getToken,
  removeToken,
  getRefreshToken,
  removeRefreshToken,
  setToken,
  setRefreshToken,
} from "../config/token";
import { refreshToken } from "./api/login";
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
    return config.data;
  },
  async (err) => {
    console.log(err, "err");
    if (err.response?.status === 401) {
      const rToken = getRefreshToken();

      const refreshRes = await refreshToken(rToken);
      removeToken();
      removeRefreshToken();
      setToken(refreshRes.data.token);
      setRefreshToken(refreshRes.data.refreshToken);
      console.log(err.config, "config");
      return request(err.config);
      //身份验证失败或过期，重新登陆
    }
  }
);

export default request;
