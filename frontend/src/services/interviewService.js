import api from "./apiService";

const generateInterview = async (data) => {
    const response = await api.post("/api/interview/generate", data);
    return response;
};

const getInterviewById = async (id) => {
    const response = await api.get(`/api/interview/${id}`);
    return response;
};

const getResult = async (id, data) => {
    const response = await api.post(`/api/interview/result/${id}`, data);
    return response;
};

export { generateInterview, getInterviewById, getResult };