import axios from "axios";

const baseURL = "http://api.openweathermap.org/data/2.5/";

export const axsiosInstance = axios.create({
  baseURL,
  timeout: 60000,
});

const successResponse = (response) => response;

const errorResponse = (error) => Promise.reject(error);

axsiosInstance.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

axsiosInstance.interceptors.request.use(successResponse, errorResponse);
