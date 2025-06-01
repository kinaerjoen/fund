import { useAxios } from "./axiosConfig";

export const uploadImage = (formData) =>
	useAxios.post(`media/upload`, formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
