import { useAxios } from "./axiosConfig";

export const getPdfById = async (pdfId) =>
	useAxios.get(`pdfs/${pdfId}`);

export const getPdfs = async () => useAxios.get(`pdfs`);

export const createPdf = async (data) => useAxios.post(`pdfs`, data);

export const deletePdf = async (pdfId) =>
	useAxios.delete(`pdfs/${pdfId}`);
