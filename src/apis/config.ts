import axios, { AxiosResponse } from 'axios';
import { User } from './user';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<User & { accessToken: string }>) => {
    const { accessToken } = response.data;
    console.log('interceptor resposne:', accessToken);
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
    return response;
  },
  (error) => Promise.reject(error)
);
