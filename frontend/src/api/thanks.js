import { useAxios } from "./axiosConfig";

export const getThankById = async (thankId) =>
	useAxios.get(`thanks/${thankId}`);

export const getThanks = async () => useAxios.get(`thanks`);

export const createThank = async (data) => useAxios.post(`thanks`, data);

export const deleteThank = async (thankId) =>
	useAxios.delete(`thanks/${thankId}`);
