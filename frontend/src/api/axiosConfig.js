import axios from 'axios';
import { getItem, setItem, removeItem } from '../helpers/localStorage';
import { refreshTokens } from './auth';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getItem('jwtToken');
  if (token) {
    const cleanToken = token.replace('Bearer ', '');
    config.headers.Authorization = `Bearer ${cleanToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await refreshTokens();
        const accessToken = response.data;
        setItem('jwtToken', accessToken);
        originalRequest.headers.Authorization = accessToken;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        removeItem('jwtToken');
        window.location.href = '/admin-panel/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const useAxios = axiosInstance;
