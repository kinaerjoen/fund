import { useAxios } from "./axiosConfig";

export const getNewById = (newId) => useAxios.get(`news/${newId}`);

export const getNews = () => useAxios.get(`news`);

export const createNew = (data) => useAxios.post(`news`, data);

export const deleteNew = (newId) => useAxios.delete(`news/${newId}`);
