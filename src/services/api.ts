import axios from "axios";
import { API_LOCAL } from "./../services";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: API_LOCAL,
});

api.interceptors.request.use(async (config: any) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
