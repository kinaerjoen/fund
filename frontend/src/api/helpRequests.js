import { useAxios } from "./axiosConfig";

const API_URL = "help-requests";

export const createHelpRequest = async (data) => {
	const response = await useAxios.post(API_URL, data);
	return response.data;
};

export const getHelpRequests = async () => {
	const response = await useAxios.get(API_URL);
	return response.data;
};

export const updateHelpRequestStatus = async (id, statusData) => {
	const response = await useAxios.put(`${API_URL}/${id}/status`, statusData);
	return response.data;
};

export const deleteHelpRequest = async (id) => {
	const response = await useAxios.delete(`${API_URL}/${id}`);
	return response.data;
}; 