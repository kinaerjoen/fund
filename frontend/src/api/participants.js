import { useAxios } from "./axiosConfig";

export const getParticipantById = async (participantId) =>
	useAxios.get(`participants/${participantId}`);

export const getParticipants = async () => useAxios.get(`participants`);

export const createParticipant = async (participantId) =>
	useAxios.post(`participants`, participantId);

export const deleteParticipant = async (participantId) =>
	useAxios.delete(`participants/${participantId}`);
