import { useAxios } from "./axiosConfig";

export const getReportById = async (reportId) => useAxios.get(`reports/${reportId}`);

export const getReports = async () => useAxios.get(`reports`);

export const createReport = async (data) => useAxios.post(`reports`, data);

export const deleteReport = async (reportId) => useAxios.delete(`reports/${reportId}`);
