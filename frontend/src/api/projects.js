import { useAxios } from "./axiosConfig";

export const getProjectById = async (projectId) => useAxios.get(`projects/${projectId}`);

export const getProjects = async () => useAxios.get(`projects`);

export const createProject = async (data) => useAxios.post(`projects`, data);

export const deleteProject = async (projectId) => useAxios.delete(`projects/${projectId}`);
