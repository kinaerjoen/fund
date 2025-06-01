import { useAxios } from './axiosConfig';
import { getItem } from '../helpers/localStorage';

export const loginUser = (params) => useAxios.post(`admin/auth/login`, params, { withCredentials: true });

export const refreshTokens = async () => {
  try {
    const response = await useAxios.get('admin/auth/refresh', { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signOut = () => useAxios.get(`admin/auth/sign-out`, { withCredentials: true });

export const login = async (username, password) => {
  const response = await useAxios.post('/auth/login', {
    username,
    password,
  });
  
  return response.data;
};

export const checkAuth = () => {
  const token = getItem('jwtToken');
  return !!token;
};
